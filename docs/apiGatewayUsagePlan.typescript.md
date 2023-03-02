# `apiGatewayUsagePlan` Submodule <a name="`apiGatewayUsagePlan` Submodule" id="@cdktf/provider-aws.apiGatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayUsagePlan <a name="ApiGatewayUsagePlan" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan aws_api_gateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

new apiGatewayUsagePlan.ApiGatewayUsagePlan(scope: Construct, id: string, config: ApiGatewayUsagePlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig">ApiGatewayUsagePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig">ApiGatewayUsagePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages">putApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings">putQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings">putThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages">resetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode">resetProductCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings">resetQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings">resetThrottleSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApiStages` <a name="putApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages"></a>

```typescript
public putApiStages(value: IResolvable | ApiGatewayUsagePlanApiStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

---

##### `putQuotaSettings` <a name="putQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings"></a>

```typescript
public putQuotaSettings(value: ApiGatewayUsagePlanQuotaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `putThrottleSettings` <a name="putThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings"></a>

```typescript
public putThrottleSettings(value: ApiGatewayUsagePlanThrottleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `resetApiStages` <a name="resetApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages"></a>

```typescript
public resetApiStages(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProductCode` <a name="resetProductCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode"></a>

```typescript
public resetProductCode(): void
```

##### `resetQuotaSettings` <a name="resetQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings"></a>

```typescript
public resetQuotaSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetThrottleSettings` <a name="resetThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings"></a>

```typescript
public resetThrottleSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages">apiStages</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings">quotaSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput">apiStagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput">productCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput">quotaSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput">throttleSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode">productCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiStages`<sup>Required</sup> <a name="apiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages"></a>

```typescript
public readonly apiStages: ApiGatewayUsagePlanApiStagesList;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `quotaSettings`<sup>Required</sup> <a name="quotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings"></a>

```typescript
public readonly quotaSettings: ApiGatewayUsagePlanQuotaSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a>

---

##### `throttleSettings`<sup>Required</sup> <a name="throttleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings"></a>

```typescript
public readonly throttleSettings: ApiGatewayUsagePlanThrottleSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a>

---

##### `apiStagesInput`<sup>Optional</sup> <a name="apiStagesInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput"></a>

```typescript
public readonly apiStagesInput: IResolvable | ApiGatewayUsagePlanApiStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productCodeInput`<sup>Optional</sup> <a name="productCodeInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput"></a>

```typescript
public readonly productCodeInput: string;
```

- *Type:* string

---

##### `quotaSettingsInput`<sup>Optional</sup> <a name="quotaSettingsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput"></a>

```typescript
public readonly quotaSettingsInput: ApiGatewayUsagePlanQuotaSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throttleSettingsInput`<sup>Optional</sup> <a name="throttleSettingsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput"></a>

```typescript
public readonly throttleSettingsInput: ApiGatewayUsagePlanThrottleSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `productCode`<sup>Required</sup> <a name="productCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode"></a>

```typescript
public readonly productCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayUsagePlanApiStages <a name="ApiGatewayUsagePlanApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

const apiGatewayUsagePlanApiStages: apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle">throttle</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]</code> | throttle block. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle"></a>

```typescript
public readonly throttle: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

throttle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle ApiGatewayUsagePlan#throttle}

---

### ApiGatewayUsagePlanApiStagesThrottle <a name="ApiGatewayUsagePlanApiStagesThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

const apiGatewayUsagePlanApiStagesThrottle: apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit">burstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}.

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

### ApiGatewayUsagePlanConfig <a name="ApiGatewayUsagePlanConfig" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

const apiGatewayUsagePlanConfig: apiGatewayUsagePlan.ApiGatewayUsagePlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages">apiStages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]</code> | api_stages block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode">productCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings">quotaSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | quota_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | throttle_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}.

---

##### `apiStages`<sup>Optional</sup> <a name="apiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages"></a>

```typescript
public readonly apiStages: IResolvable | ApiGatewayUsagePlanApiStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

api_stages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_stages ApiGatewayUsagePlan#api_stages}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `productCode`<sup>Optional</sup> <a name="productCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode"></a>

```typescript
public readonly productCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}.

---

##### `quotaSettings`<sup>Optional</sup> <a name="quotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings"></a>

```typescript
public readonly quotaSettings: ApiGatewayUsagePlanQuotaSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

quota_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#quota_settings ApiGatewayUsagePlan#quota_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}.

---

##### `throttleSettings`<sup>Optional</sup> <a name="throttleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings"></a>

```typescript
public readonly throttleSettings: ApiGatewayUsagePlanThrottleSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

throttle_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle_settings ApiGatewayUsagePlan#throttle_settings}

---

### ApiGatewayUsagePlanQuotaSettings <a name="ApiGatewayUsagePlanQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

const apiGatewayUsagePlanQuotaSettings: apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset">offset</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}. |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}.

---

### ApiGatewayUsagePlanThrottleSettings <a name="ApiGatewayUsagePlanThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

const apiGatewayUsagePlanThrottleSettings: apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit">burstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayUsagePlanApiStagesList <a name="ApiGatewayUsagePlanApiStagesList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get"></a>

```typescript
public get(index: number): ApiGatewayUsagePlanApiStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiGatewayUsagePlanApiStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>[]

---


### ApiGatewayUsagePlanApiStagesOutputReference <a name="ApiGatewayUsagePlanApiStagesOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle">putThrottle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle">resetThrottle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putThrottle` <a name="putThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```typescript
public putThrottle(value: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

---

##### `resetThrottle` <a name="resetThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```typescript
public resetThrottle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle">throttle</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput">throttleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```typescript
public readonly throttle: ApiGatewayUsagePlanApiStagesThrottleList;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```typescript
public readonly throttleInput: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayUsagePlanApiStages | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a> | cdktf.IResolvable

---


### ApiGatewayUsagePlanApiStagesThrottleList <a name="ApiGatewayUsagePlanApiStagesThrottleList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get"></a>

```typescript
public get(index: number): ApiGatewayUsagePlanApiStagesThrottleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiGatewayUsagePlanApiStagesThrottle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>[]

---


### ApiGatewayUsagePlanApiStagesThrottleOutputReference <a name="ApiGatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

new apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```typescript
public resetBurstLimit(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```typescript
public readonly burstLimitInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayUsagePlanApiStagesThrottle | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a> | cdktf.IResolvable

---


### ApiGatewayUsagePlanQuotaSettingsOutputReference <a name="ApiGatewayUsagePlanQuotaSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

new apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayUsagePlanQuotaSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---


### ApiGatewayUsagePlanThrottleSettingsOutputReference <a name="ApiGatewayUsagePlanThrottleSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayUsagePlan } from '@cdktf/provider-aws'

new apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit"></a>

```typescript
public resetBurstLimit(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput"></a>

```typescript
public readonly burstLimitInput: number;
```

- *Type:* number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayUsagePlanThrottleSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---



