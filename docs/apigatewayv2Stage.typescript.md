# `apigatewayv2Stage` Submodule <a name="`apigatewayv2Stage` Submodule" id="@cdktf/provider-aws.apigatewayv2Stage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Stage <a name="Apigatewayv2Stage" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage aws_apigatewayv2_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

new apigatewayv2Stage.Apigatewayv2Stage(scope: Construct, id: string, config: Apigatewayv2StageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings">putAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings">putDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings">putRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings">resetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy">resetAutoDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings">resetDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings">resetRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables">resetStageVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccessLogSettings` <a name="putAccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings"></a>

```typescript
public putAccessLogSettings(value: Apigatewayv2StageAccessLogSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `putDefaultRouteSettings` <a name="putDefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings"></a>

```typescript
public putDefaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `putRouteSettings` <a name="putRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings"></a>

```typescript
public putRouteSettings(value: IResolvable | Apigatewayv2StageRouteSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>[]

---

##### `resetAccessLogSettings` <a name="resetAccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings"></a>

```typescript
public resetAccessLogSettings(): void
```

##### `resetAutoDeploy` <a name="resetAutoDeploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy"></a>

```typescript
public resetAutoDeploy(): void
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId"></a>

```typescript
public resetClientCertificateId(): void
```

##### `resetDefaultRouteSettings` <a name="resetDefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings"></a>

```typescript
public resetDefaultRouteSettings(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRouteSettings` <a name="resetRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings"></a>

```typescript
public resetRouteSettings(): void
```

##### `resetStageVariables` <a name="resetStageVariables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables"></a>

```typescript
public resetStageVariables(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

apigatewayv2Stage.Apigatewayv2Stage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings">defaultRouteSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.executionArn">executionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.invokeUrl">invokeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings">routeSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList">Apigatewayv2StageRouteSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput">accessLogSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput">autoDeployInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput">defaultRouteSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput">routeSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput">stageVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy">autoDeploy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables">stageVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLogSettings`<sup>Required</sup> <a name="accessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings"></a>

```typescript
public readonly accessLogSettings: Apigatewayv2StageAccessLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultRouteSettings`<sup>Required</sup> <a name="defaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings"></a>

```typescript
public readonly defaultRouteSettings: Apigatewayv2StageDefaultRouteSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a>

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.executionArn"></a>

```typescript
public readonly executionArn: string;
```

- *Type:* string

---

##### `invokeUrl`<sup>Required</sup> <a name="invokeUrl" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.invokeUrl"></a>

```typescript
public readonly invokeUrl: string;
```

- *Type:* string

---

##### `routeSettings`<sup>Required</sup> <a name="routeSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings"></a>

```typescript
public readonly routeSettings: Apigatewayv2StageRouteSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList">Apigatewayv2StageRouteSettingsList</a>

---

##### `accessLogSettingsInput`<sup>Optional</sup> <a name="accessLogSettingsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput"></a>

```typescript
public readonly accessLogSettingsInput: Apigatewayv2StageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `autoDeployInput`<sup>Optional</sup> <a name="autoDeployInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput"></a>

```typescript
public readonly autoDeployInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput"></a>

```typescript
public readonly clientCertificateIdInput: string;
```

- *Type:* string

---

##### `defaultRouteSettingsInput`<sup>Optional</sup> <a name="defaultRouteSettingsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput"></a>

```typescript
public readonly defaultRouteSettingsInput: Apigatewayv2StageDefaultRouteSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routeSettingsInput`<sup>Optional</sup> <a name="routeSettingsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput"></a>

```typescript
public readonly routeSettingsInput: IResolvable | Apigatewayv2StageRouteSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>[]

---

##### `stageVariablesInput`<sup>Optional</sup> <a name="stageVariablesInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput"></a>

```typescript
public readonly stageVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `autoDeploy`<sup>Required</sup> <a name="autoDeploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy"></a>

```typescript
public readonly autoDeploy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stageVariables`<sup>Required</sup> <a name="stageVariables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables"></a>

```typescript
public readonly stageVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2StageAccessLogSettings <a name="Apigatewayv2StageAccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

const apigatewayv2StageAccessLogSettings: apigatewayv2Stage.Apigatewayv2StageAccessLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}. |

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}.

---

### Apigatewayv2StageConfig <a name="Apigatewayv2StageConfig" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

const apigatewayv2StageConfig: apigatewayv2Stage.Apigatewayv2StageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy">autoDeploy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings">defaultRouteSettings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | default_route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings">routeSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>[]</code> | route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables">stageVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}.

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings"></a>

```typescript
public readonly accessLogSettings: Apigatewayv2StageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `autoDeploy`<sup>Optional</sup> <a name="autoDeploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy"></a>

```typescript
public readonly autoDeploy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}.

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}.

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="defaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings"></a>

```typescript
public readonly defaultRouteSettings: Apigatewayv2StageDefaultRouteSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

default_route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routeSettings`<sup>Optional</sup> <a name="routeSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings"></a>

```typescript
public readonly routeSettings: IResolvable | Apigatewayv2StageRouteSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>[]

route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `stageVariables`<sup>Optional</sup> <a name="stageVariables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables"></a>

```typescript
public readonly stageVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}.

---

### Apigatewayv2StageDefaultRouteSettings <a name="Apigatewayv2StageDefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

const apigatewayv2StageDefaultRouteSettings: apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `detailedMetricsEnabled`<sup>Optional</sup> <a name="detailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

```typescript
public readonly detailedMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

### Apigatewayv2StageRouteSettings <a name="Apigatewayv2StageRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

const apigatewayv2StageRouteSettings: apigatewayv2Stage.Apigatewayv2StageRouteSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.routeKey">routeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}.

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `detailedMetricsEnabled`<sup>Optional</sup> <a name="detailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.detailedMetricsEnabled"></a>

```typescript
public readonly detailedMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2StageAccessLogSettingsOutputReference <a name="Apigatewayv2StageAccessLogSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

new apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Apigatewayv2StageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---


### Apigatewayv2StageDefaultRouteSettingsOutputReference <a name="Apigatewayv2StageDefaultRouteSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

new apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled">resetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```typescript
public resetDataTraceEnabled(): void
```

##### `resetDetailedMetricsEnabled` <a name="resetDetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```typescript
public resetDetailedMetricsEnabled(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```typescript
public resetThrottlingBurstLimit(): void
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```typescript
public resetThrottlingRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput">detailedMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```typescript
public readonly dataTraceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detailedMetricsEnabledInput`<sup>Optional</sup> <a name="detailedMetricsEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```typescript
public readonly detailedMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```typescript
public readonly throttlingBurstLimitInput: number;
```

- *Type:* number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```typescript
public readonly throttlingRateLimitInput: number;
```

- *Type:* number

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="detailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```typescript
public readonly detailedMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Apigatewayv2StageDefaultRouteSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---


### Apigatewayv2StageRouteSettingsList <a name="Apigatewayv2StageRouteSettingsList" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

new apigatewayv2Stage.Apigatewayv2StageRouteSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get"></a>

```typescript
public get(index: number): Apigatewayv2StageRouteSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2StageRouteSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>[]

---


### Apigatewayv2StageRouteSettingsOutputReference <a name="Apigatewayv2StageRouteSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer"></a>

```typescript
import { apigatewayv2Stage } from '@cdktf/provider-aws'

new apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDetailedMetricsEnabled">resetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```typescript
public resetDataTraceEnabled(): void
```

##### `resetDetailedMetricsEnabled` <a name="resetDetailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```typescript
public resetDetailedMetricsEnabled(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```typescript
public resetThrottlingBurstLimit(): void
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```typescript
public resetThrottlingRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabledInput">detailedMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKeyInput">routeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKey">routeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```typescript
public readonly dataTraceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detailedMetricsEnabledInput`<sup>Optional</sup> <a name="detailedMetricsEnabledInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```typescript
public readonly detailedMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKeyInput"></a>

```typescript
public readonly routeKeyInput: string;
```

- *Type:* string

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```typescript
public readonly throttlingBurstLimitInput: number;
```

- *Type:* number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```typescript
public readonly throttlingRateLimitInput: number;
```

- *Type:* number

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```typescript
public readonly dataTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="detailedMetricsEnabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```typescript
public readonly detailedMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKey"></a>

```typescript
public readonly routeKey: string;
```

- *Type:* string

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```typescript
public readonly throttlingBurstLimit: number;
```

- *Type:* number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```typescript
public readonly throttlingRateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Apigatewayv2StageRouteSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a> | cdktf.IResolvable

---



