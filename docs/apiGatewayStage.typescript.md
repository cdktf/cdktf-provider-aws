# `apiGatewayStage` Submodule <a name="`apiGatewayStage` Submodule" id="@cdktf/provider-aws.apiGatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayStage <a name="ApiGatewayStage" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage aws_api_gateway_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

new apiGatewayStage.ApiGatewayStage(scope: Construct, id: string, config: ApiGatewayStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings">putAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings">putCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings">resetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled">resetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize">resetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings">resetCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion">resetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables">resetVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled">resetXrayTracingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccessLogSettings` <a name="putAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings"></a>

```typescript
public putAccessLogSettings(value: ApiGatewayStageAccessLogSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `putCanarySettings` <a name="putCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings"></a>

```typescript
public putCanarySettings(value: ApiGatewayStageCanarySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `resetAccessLogSettings` <a name="resetAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings"></a>

```typescript
public resetAccessLogSettings(): void
```

##### `resetCacheClusterEnabled` <a name="resetCacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled"></a>

```typescript
public resetCacheClusterEnabled(): void
```

##### `resetCacheClusterSize` <a name="resetCacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize"></a>

```typescript
public resetCacheClusterSize(): void
```

##### `resetCanarySettings` <a name="resetCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings"></a>

```typescript
public resetCanarySettings(): void
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId"></a>

```typescript
public resetClientCertificateId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentationVersion` <a name="resetDocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion"></a>

```typescript
public resetDocumentationVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables"></a>

```typescript
public resetVariables(): void
```

##### `resetXrayTracingEnabled` <a name="resetXrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled"></a>

```typescript
public resetXrayTracingEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

apiGatewayStage.ApiGatewayStage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

apiGatewayStage.ApiGatewayStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

apiGatewayStage.ApiGatewayStage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn">executionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl">invokeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn">webAclArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput">accessLogSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput">cacheClusterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput">cacheClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput">canarySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput">documentationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput">stageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput">xrayTracingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled">xrayTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLogSettings`<sup>Required</sup> <a name="accessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings"></a>

```typescript
public readonly accessLogSettings: ApiGatewayStageAccessLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `canarySettings`<sup>Required</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings"></a>

```typescript
public readonly canarySettings: ApiGatewayStageCanarySettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a>

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn"></a>

```typescript
public readonly executionArn: string;
```

- *Type:* string

---

##### `invokeUrl`<sup>Required</sup> <a name="invokeUrl" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl"></a>

```typescript
public readonly invokeUrl: string;
```

- *Type:* string

---

##### `webAclArn`<sup>Required</sup> <a name="webAclArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn"></a>

```typescript
public readonly webAclArn: string;
```

- *Type:* string

---

##### `accessLogSettingsInput`<sup>Optional</sup> <a name="accessLogSettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput"></a>

```typescript
public readonly accessLogSettingsInput: ApiGatewayStageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `cacheClusterEnabledInput`<sup>Optional</sup> <a name="cacheClusterEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput"></a>

```typescript
public readonly cacheClusterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheClusterSizeInput`<sup>Optional</sup> <a name="cacheClusterSizeInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput"></a>

```typescript
public readonly cacheClusterSizeInput: string;
```

- *Type:* string

---

##### `canarySettingsInput`<sup>Optional</sup> <a name="canarySettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput"></a>

```typescript
public readonly canarySettingsInput: ApiGatewayStageCanarySettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput"></a>

```typescript
public readonly clientCertificateIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentationVersionInput`<sup>Optional</sup> <a name="documentationVersionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput"></a>

```typescript
public readonly documentationVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput"></a>

```typescript
public readonly stageNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `xrayTracingEnabledInput`<sup>Optional</sup> <a name="xrayTracingEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput"></a>

```typescript
public readonly xrayTracingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `xrayTracingEnabled`<sup>Required</sup> <a name="xrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled"></a>

```typescript
public readonly xrayTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayStageAccessLogSettings <a name="ApiGatewayStageAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

const apiGatewayStageAccessLogSettings: apiGatewayStage.ApiGatewayStageAccessLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}. |

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}.

---

### ApiGatewayStageCanarySettings <a name="ApiGatewayStageCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

const apiGatewayStageCanarySettings: apiGatewayStage.ApiGatewayStageCanarySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}. |

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}.

---

### ApiGatewayStageConfig <a name="ApiGatewayStageConfig" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

const apiGatewayStageConfig: apiGatewayStage.ApiGatewayStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName">stageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled">xrayTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}.

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings"></a>

```typescript
public readonly accessLogSettings: ApiGatewayStageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="cacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}.

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="cacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}.

---

##### `canarySettings`<sup>Optional</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings"></a>

```typescript
public readonly canarySettings: ApiGatewayStageCanarySettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#canary_settings ApiGatewayStage#canary_settings}

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}.

---

##### `documentationVersion`<sup>Optional</sup> <a name="documentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}.

---

##### `xrayTracingEnabled`<sup>Optional</sup> <a name="xrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled"></a>

```typescript
public readonly xrayTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayStageAccessLogSettingsOutputReference <a name="ApiGatewayStageAccessLogSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

new apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayStageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---


### ApiGatewayStageCanarySettingsOutputReference <a name="ApiGatewayStageCanarySettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/provider-aws'

new apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic"></a>

```typescript
public resetPercentTraffic(): void
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```typescript
public resetStageVariableOverrides(): void
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache"></a>

```typescript
public resetUseStageCache(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache">useStageCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput"></a>

```typescript
public readonly percentTrafficInput: number;
```

- *Type:* number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```typescript
public readonly stageVariableOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput"></a>

```typescript
public readonly useStageCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic"></a>

```typescript
public readonly percentTraffic: number;
```

- *Type:* number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```typescript
public readonly stageVariableOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache"></a>

```typescript
public readonly useStageCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayStageCanarySettings;
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---



