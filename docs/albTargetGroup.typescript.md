# `albTargetGroup` Submodule <a name="`albTargetGroup` Submodule" id="@cdktf/provider-aws.albTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbTargetGroup <a name="AlbTargetGroup" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group aws_alb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

new albTargetGroup.AlbTargetGroup(scope: Construct, id: string, config?: AlbTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig">AlbTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig">AlbTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover">putTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination">resetConnectionTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay">resetDeregistrationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled">resetLambdaMultiValueHeadersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType">resetLoadBalancingAlgorithmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp">resetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2">resetProxyProtocolV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart">resetSlowStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness">resetStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover">resetTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType">resetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck"></a>

```typescript
public putHealthCheck(value: AlbTargetGroupHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness"></a>

```typescript
public putStickiness(value: AlbTargetGroupStickiness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---

##### `putTargetFailover` <a name="putTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover"></a>

```typescript
public putTargetFailover(value: IResolvable | AlbTargetGroupTargetFailover[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>[]

---

##### `resetConnectionTermination` <a name="resetConnectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination"></a>

```typescript
public resetConnectionTermination(): void
```

##### `resetDeregistrationDelay` <a name="resetDeregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay"></a>

```typescript
public resetDeregistrationDelay(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetLambdaMultiValueHeadersEnabled` <a name="resetLambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```typescript
public resetLambdaMultiValueHeadersEnabled(): void
```

##### `resetLoadBalancingAlgorithmType` <a name="resetLoadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```typescript
public resetLoadBalancingAlgorithmType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreserveClientIp` <a name="resetPreserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp"></a>

```typescript
public resetPreserveClientIp(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion"></a>

```typescript
public resetProtocolVersion(): void
```

##### `resetProxyProtocolV2` <a name="resetProxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2"></a>

```typescript
public resetProxyProtocolV2(): void
```

##### `resetSlowStart` <a name="resetSlowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart"></a>

```typescript
public resetSlowStart(): void
```

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness"></a>

```typescript
public resetStickiness(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTargetFailover` <a name="resetTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover"></a>

```typescript
public resetTargetFailover(): void
```

##### `resetTargetType` <a name="resetTargetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType"></a>

```typescript
public resetTargetType(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

albTargetGroup.AlbTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

albTargetGroup.AlbTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

albTargetGroup.AlbTargetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix">arnSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover">targetFailover</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput">connectionTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput">deregistrationDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">lambdaMultiValueHeadersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput">loadBalancingAlgorithmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput">preserveClientIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput">protocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input">proxyProtocolV2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput">slowStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput">targetFailoverInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination">connectionTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay">deregistrationDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp">preserveClientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart">slowStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix"></a>

```typescript
public readonly arnSuffix: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck"></a>

```typescript
public readonly healthCheck: AlbTargetGroupHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a>

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness"></a>

```typescript
public readonly stickiness: AlbTargetGroupStickinessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a>

---

##### `targetFailover`<sup>Required</sup> <a name="targetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover"></a>

```typescript
public readonly targetFailover: AlbTargetGroupTargetFailoverList;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a>

---

##### `connectionTerminationInput`<sup>Optional</sup> <a name="connectionTerminationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput"></a>

```typescript
public readonly connectionTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deregistrationDelayInput`<sup>Optional</sup> <a name="deregistrationDelayInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput"></a>

```typescript
public readonly deregistrationDelayInput: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: AlbTargetGroupHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `lambdaMultiValueHeadersEnabledInput`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```typescript
public readonly lambdaMultiValueHeadersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancingAlgorithmTypeInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```typescript
public readonly loadBalancingAlgorithmTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preserveClientIpInput`<sup>Optional</sup> <a name="preserveClientIpInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput"></a>

```typescript
public readonly preserveClientIpInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: string;
```

- *Type:* string

---

##### `proxyProtocolV2Input`<sup>Optional</sup> <a name="proxyProtocolV2Input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input"></a>

```typescript
public readonly proxyProtocolV2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slowStartInput`<sup>Optional</sup> <a name="slowStartInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput"></a>

```typescript
public readonly slowStartInput: number;
```

- *Type:* number

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput"></a>

```typescript
public readonly stickinessInput: AlbTargetGroupStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetFailoverInput`<sup>Optional</sup> <a name="targetFailoverInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput"></a>

```typescript
public readonly targetFailoverInput: IResolvable | AlbTargetGroupTargetFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>[]

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `connectionTermination`<sup>Required</sup> <a name="connectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination"></a>

```typescript
public readonly connectionTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deregistrationDelay`<sup>Required</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay"></a>

```typescript
public readonly deregistrationDelay: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `lambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```typescript
public readonly lambdaMultiValueHeadersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loadBalancingAlgorithmType`<sup>Required</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType"></a>

```typescript
public readonly loadBalancingAlgorithmType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preserveClientIp`<sup>Required</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp"></a>

```typescript
public readonly preserveClientIp: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `proxyProtocolV2`<sup>Required</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2"></a>

```typescript
public readonly proxyProtocolV2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slowStart`<sup>Required</sup> <a name="slowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart"></a>

```typescript
public readonly slowStart: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlbTargetGroupConfig <a name="AlbTargetGroupConfig" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

const albTargetGroupConfig: albTargetGroup.AlbTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination">connectionTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay">deregistrationDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">lambdaMultiValueHeadersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType">loadBalancingAlgorithmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp">preserveClientIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2">proxyProtocolV2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart">slowStart</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover">targetFailover</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>[]</code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionTermination`<sup>Optional</sup> <a name="connectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination"></a>

```typescript
public readonly connectionTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}.

---

##### `deregistrationDelay`<sup>Optional</sup> <a name="deregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay"></a>

```typescript
public readonly deregistrationDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck"></a>

```typescript
public readonly healthCheck: AlbTargetGroupHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#health_check AlbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}.

---

##### `lambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="lambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```typescript
public readonly lambdaMultiValueHeadersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `loadBalancingAlgorithmType`<sup>Optional</sup> <a name="loadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```typescript
public readonly loadBalancingAlgorithmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}.

---

##### `preserveClientIp`<sup>Optional</sup> <a name="preserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp"></a>

```typescript
public readonly preserveClientIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}.

---

##### `proxyProtocolV2`<sup>Optional</sup> <a name="proxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2"></a>

```typescript
public readonly proxyProtocolV2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}.

---

##### `slowStart`<sup>Optional</sup> <a name="slowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart"></a>

```typescript
public readonly slowStart: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness"></a>

```typescript
public readonly stickiness: AlbTargetGroupStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#stickiness AlbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}.

---

##### `targetFailover`<sup>Optional</sup> <a name="targetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover"></a>

```typescript
public readonly targetFailover: IResolvable | AlbTargetGroupTargetFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>[]

target_failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_failover AlbTargetGroup#target_failover}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}.

---

### AlbTargetGroupHealthCheck <a name="AlbTargetGroupHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

const albTargetGroupHealthCheck: albTargetGroup.AlbTargetGroupHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#interval AlbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher">matcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#matcher AlbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#path AlbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#timeout AlbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#interval AlbTargetGroup#interval}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#matcher AlbTargetGroup#matcher}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#path AlbTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#timeout AlbTargetGroup#timeout}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}.

---

### AlbTargetGroupStickiness <a name="AlbTargetGroupStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

const albTargetGroupStickiness: albTargetGroup.AlbTargetGroupStickiness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#type AlbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration">cookieDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName">cookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_name AlbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#type AlbTargetGroup#type}.

---

##### `cookieDuration`<sup>Optional</sup> <a name="cookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration"></a>

```typescript
public readonly cookieDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}.

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_name AlbTargetGroup#cookie_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}.

---

### AlbTargetGroupTargetFailover <a name="AlbTargetGroupTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

const albTargetGroupTargetFailover: albTargetGroup.AlbTargetGroupTargetFailover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration">onDeregistration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy">onUnhealthy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}. |

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration"></a>

```typescript
public readonly onDeregistration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}.

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy"></a>

```typescript
public readonly onUnhealthy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbTargetGroupHealthCheckOutputReference <a name="AlbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

new albTargetGroup.AlbTargetGroupHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```typescript
public resetMatcher(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput">matcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```typescript
public readonly matcherInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbTargetGroupHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---


### AlbTargetGroupStickinessOutputReference <a name="AlbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

new albTargetGroup.AlbTargetGroupStickinessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration">resetCookieDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieDuration` <a name="resetCookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```typescript
public resetCookieDuration(): void
```

##### `resetCookieName` <a name="resetCookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName"></a>

```typescript
public resetCookieName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput">cookieDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration">cookieDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieDurationInput`<sup>Optional</sup> <a name="cookieDurationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```typescript
public readonly cookieDurationInput: number;
```

- *Type:* number

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```typescript
public readonly cookieNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cookieDuration`<sup>Required</sup> <a name="cookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```typescript
public readonly cookieDuration: number;
```

- *Type:* number

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbTargetGroupStickiness;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---


### AlbTargetGroupTargetFailoverList <a name="AlbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

new albTargetGroup.AlbTargetGroupTargetFailoverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get"></a>

```typescript
public get(index: number): AlbTargetGroupTargetFailoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbTargetGroupTargetFailover[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>[]

---


### AlbTargetGroupTargetFailoverOutputReference <a name="AlbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```typescript
import { albTargetGroup } from '@cdktf/provider-aws'

new albTargetGroup.AlbTargetGroupTargetFailoverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">onDeregistrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">onUnhealthyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration">onDeregistration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">onUnhealthy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDeregistrationInput`<sup>Optional</sup> <a name="onDeregistrationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```typescript
public readonly onDeregistrationInput: string;
```

- *Type:* string

---

##### `onUnhealthyInput`<sup>Optional</sup> <a name="onUnhealthyInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```typescript
public readonly onUnhealthyInput: string;
```

- *Type:* string

---

##### `onDeregistration`<sup>Required</sup> <a name="onDeregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```typescript
public readonly onDeregistration: string;
```

- *Type:* string

---

##### `onUnhealthy`<sup>Required</sup> <a name="onUnhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```typescript
public readonly onUnhealthy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbTargetGroupTargetFailover | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a> | cdktf.IResolvable

---



