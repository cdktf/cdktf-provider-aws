# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktf/provider-aws.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check aws_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktf/provider-aws'

new route53HealthCheck.Route53HealthCheck(scope: Construct, id: string, config: Route53HealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks">resetChildHealthchecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold">resetChildHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName">resetCloudwatchAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion">resetCloudwatchAlarmRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni">resetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus">resetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck">resetInvertHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency">resetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName">resetReferenceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval">resetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn">resetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString">resetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetChildHealthchecks` <a name="resetChildHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks"></a>

```typescript
public resetChildHealthchecks(): void
```

##### `resetChildHealthThreshold` <a name="resetChildHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold"></a>

```typescript
public resetChildHealthThreshold(): void
```

##### `resetCloudwatchAlarmName` <a name="resetCloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName"></a>

```typescript
public resetCloudwatchAlarmName(): void
```

##### `resetCloudwatchAlarmRegion` <a name="resetCloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion"></a>

```typescript
public resetCloudwatchAlarmRegion(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEnableSni` <a name="resetEnableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni"></a>

```typescript
public resetEnableSni(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetFqdn` <a name="resetFqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn"></a>

```typescript
public resetFqdn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsufficientDataHealthStatus` <a name="resetInsufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus"></a>

```typescript
public resetInsufficientDataHealthStatus(): void
```

##### `resetInvertHealthcheck` <a name="resetInvertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck"></a>

```typescript
public resetInvertHealthcheck(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetMeasureLatency` <a name="resetMeasureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency"></a>

```typescript
public resetMeasureLatency(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetReferenceName` <a name="resetReferenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName"></a>

```typescript
public resetReferenceName(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRequestInterval` <a name="resetRequestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval"></a>

```typescript
public resetRequestInterval(): void
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath"></a>

```typescript
public resetResourcePath(): void
```

##### `resetRoutingControlArn` <a name="resetRoutingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn"></a>

```typescript
public resetRoutingControlArn(): void
```

##### `resetSearchString` <a name="resetSearchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString"></a>

```typescript
public resetSearchString(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```typescript
import { route53HealthCheck } from '@cdktf/provider-aws'

route53HealthCheck.Route53HealthCheck.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```typescript
import { route53HealthCheck } from '@cdktf/provider-aws'

route53HealthCheck.Route53HealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```typescript
import { route53HealthCheck } from '@cdktf/provider-aws'

route53HealthCheck.Route53HealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput">childHealthchecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput">childHealthThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput">cloudwatchAlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput">cloudwatchAlarmRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput">enableSniInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput">insufficientDataHealthStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput">invertHealthcheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput">measureLatencyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput">referenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput">requestIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput">resourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput">routingControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput">searchStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks">childHealthchecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold">childHealthThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName">cloudwatchAlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion">cloudwatchAlarmRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni">enableSni</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck">invertHealthcheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency">measureLatency</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName">referenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval">requestInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn">routingControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString">searchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `childHealthchecksInput`<sup>Optional</sup> <a name="childHealthchecksInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput"></a>

```typescript
public readonly childHealthchecksInput: string[];
```

- *Type:* string[]

---

##### `childHealthThresholdInput`<sup>Optional</sup> <a name="childHealthThresholdInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput"></a>

```typescript
public readonly childHealthThresholdInput: number;
```

- *Type:* number

---

##### `cloudwatchAlarmNameInput`<sup>Optional</sup> <a name="cloudwatchAlarmNameInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput"></a>

```typescript
public readonly cloudwatchAlarmNameInput: string;
```

- *Type:* string

---

##### `cloudwatchAlarmRegionInput`<sup>Optional</sup> <a name="cloudwatchAlarmRegionInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput"></a>

```typescript
public readonly cloudwatchAlarmRegionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSniInput`<sup>Optional</sup> <a name="enableSniInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput"></a>

```typescript
public readonly enableSniInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insufficientDataHealthStatusInput`<sup>Optional</sup> <a name="insufficientDataHealthStatusInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput"></a>

```typescript
public readonly insufficientDataHealthStatusInput: string;
```

- *Type:* string

---

##### `invertHealthcheckInput`<sup>Optional</sup> <a name="invertHealthcheckInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput"></a>

```typescript
public readonly invertHealthcheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `measureLatencyInput`<sup>Optional</sup> <a name="measureLatencyInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput"></a>

```typescript
public readonly measureLatencyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `referenceNameInput`<sup>Optional</sup> <a name="referenceNameInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput"></a>

```typescript
public readonly referenceNameInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `requestIntervalInput`<sup>Optional</sup> <a name="requestIntervalInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput"></a>

```typescript
public readonly requestIntervalInput: number;
```

- *Type:* number

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput"></a>

```typescript
public readonly resourcePathInput: string;
```

- *Type:* string

---

##### `routingControlArnInput`<sup>Optional</sup> <a name="routingControlArnInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput"></a>

```typescript
public readonly routingControlArnInput: string;
```

- *Type:* string

---

##### `searchStringInput`<sup>Optional</sup> <a name="searchStringInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput"></a>

```typescript
public readonly searchStringInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `childHealthchecks`<sup>Required</sup> <a name="childHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks"></a>

```typescript
public readonly childHealthchecks: string[];
```

- *Type:* string[]

---

##### `childHealthThreshold`<sup>Required</sup> <a name="childHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold"></a>

```typescript
public readonly childHealthThreshold: number;
```

- *Type:* number

---

##### `cloudwatchAlarmName`<sup>Required</sup> <a name="cloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName"></a>

```typescript
public readonly cloudwatchAlarmName: string;
```

- *Type:* string

---

##### `cloudwatchAlarmRegion`<sup>Required</sup> <a name="cloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion"></a>

```typescript
public readonly cloudwatchAlarmRegion: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSni`<sup>Required</sup> <a name="enableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni"></a>

```typescript
public readonly enableSni: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insufficientDataHealthStatus`<sup>Required</sup> <a name="insufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus"></a>

```typescript
public readonly insufficientDataHealthStatus: string;
```

- *Type:* string

---

##### `invertHealthcheck`<sup>Required</sup> <a name="invertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck"></a>

```typescript
public readonly invertHealthcheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `measureLatency`<sup>Required</sup> <a name="measureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency"></a>

```typescript
public readonly measureLatency: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `referenceName`<sup>Required</sup> <a name="referenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName"></a>

```typescript
public readonly referenceName: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requestInterval`<sup>Required</sup> <a name="requestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval"></a>

```typescript
public readonly requestInterval: number;
```

- *Type:* number

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `routingControlArn`<sup>Required</sup> <a name="routingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn"></a>

```typescript
public readonly routingControlArn: string;
```

- *Type:* string

---

##### `searchString`<sup>Required</sup> <a name="searchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString"></a>

```typescript
public readonly searchString: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktf/provider-aws'

const route53HealthCheckConfig: route53HealthCheck.Route53HealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks">childHealthchecks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold">childHealthThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName">cloudwatchAlarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion">cloudwatchAlarmRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni">enableSni</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn">fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck">invertHealthcheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency">measureLatency</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName">referenceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval">requestInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath">resourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn">routingControlArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString">searchString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}.

---

##### `childHealthchecks`<sup>Optional</sup> <a name="childHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks"></a>

```typescript
public readonly childHealthchecks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}.

---

##### `childHealthThreshold`<sup>Optional</sup> <a name="childHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold"></a>

```typescript
public readonly childHealthThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}.

---

##### `cloudwatchAlarmName`<sup>Optional</sup> <a name="cloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName"></a>

```typescript
public readonly cloudwatchAlarmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.

---

##### `cloudwatchAlarmRegion`<sup>Optional</sup> <a name="cloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion"></a>

```typescript
public readonly cloudwatchAlarmRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}.

---

##### `enableSni`<sup>Optional</sup> <a name="enableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni"></a>

```typescript
public readonly enableSni: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="insufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus"></a>

```typescript
public readonly insufficientDataHealthStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `invertHealthcheck`<sup>Optional</sup> <a name="invertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck"></a>

```typescript
public readonly invertHealthcheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measureLatency`<sup>Optional</sup> <a name="measureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency"></a>

```typescript
public readonly measureLatency: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}.

---

##### `referenceName`<sup>Optional</sup> <a name="referenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName"></a>

```typescript
public readonly referenceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `requestInterval`<sup>Optional</sup> <a name="requestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval"></a>

```typescript
public readonly requestInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routingControlArn`<sup>Optional</sup> <a name="routingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn"></a>

```typescript
public readonly routingControlArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString"></a>

```typescript
public readonly searchString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}.

---



