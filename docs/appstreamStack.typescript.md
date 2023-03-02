# `appstreamStack` Submodule <a name="`appstreamStack` Submodule" id="@cdktf/provider-aws.appstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamStack <a name="AppstreamStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack aws_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStack(scope: Construct, id: string, config: AppstreamStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.putAccessEndpoints">putAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.putStorageConnectors">putStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetAccessEndpoints">resetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetEmbedHostDomains">resetEmbedHostDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetFeedbackUrl">resetFeedbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetStorageConnectors">resetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccessEndpoints` <a name="putAccessEndpoints" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putAccessEndpoints"></a>

```typescript
public putAccessEndpoints(value: IResolvable | AppstreamStackAccessEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putApplicationSettings"></a>

```typescript
public putApplicationSettings(value: AppstreamStackApplicationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `putStorageConnectors` <a name="putStorageConnectors" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putStorageConnectors"></a>

```typescript
public putStorageConnectors(value: IResolvable | AppstreamStackStorageConnectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putStorageConnectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putUserSettings"></a>

```typescript
public putUserSettings(value: IResolvable | AppstreamStackUserSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.putUserSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `resetAccessEndpoints` <a name="resetAccessEndpoints" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetAccessEndpoints"></a>

```typescript
public resetAccessEndpoints(): void
```

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetApplicationSettings"></a>

```typescript
public resetApplicationSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmbedHostDomains` <a name="resetEmbedHostDomains" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetEmbedHostDomains"></a>

```typescript
public resetEmbedHostDomains(): void
```

##### `resetFeedbackUrl` <a name="resetFeedbackUrl" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetFeedbackUrl"></a>

```typescript
public resetFeedbackUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetRedirectUrl"></a>

```typescript
public resetRedirectUrl(): void
```

##### `resetStorageConnectors` <a name="resetStorageConnectors" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetStorageConnectors"></a>

```typescript
public resetStorageConnectors(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.resetUserSettings"></a>

```typescript
public resetUserSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.isConstruct"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

appstreamStack.AppstreamStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.isTerraformElement"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

appstreamStack.AppstreamStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.isTerraformResource"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

appstreamStack.AppstreamStack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.storageConnectors">storageConnectors</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.userSettings">userSettings</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.accessEndpointsInput">accessEndpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomainsInput">embedHostDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrlInput">feedbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.storageConnectorsInput">storageConnectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.userSettingsInput">userSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomains">embedHostDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrl">feedbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: AppstreamStackAccessEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a>

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: AppstreamStackApplicationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `storageConnectors`<sup>Required</sup> <a name="storageConnectors" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.storageConnectors"></a>

```typescript
public readonly storageConnectors: AppstreamStackStorageConnectorsList;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a>

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.userSettings"></a>

```typescript
public readonly userSettings: AppstreamStackUserSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a>

---

##### `accessEndpointsInput`<sup>Optional</sup> <a name="accessEndpointsInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.accessEndpointsInput"></a>

```typescript
public readonly accessEndpointsInput: IResolvable | AppstreamStackAccessEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.applicationSettingsInput"></a>

```typescript
public readonly applicationSettingsInput: AppstreamStackApplicationSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `embedHostDomainsInput`<sup>Optional</sup> <a name="embedHostDomainsInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomainsInput"></a>

```typescript
public readonly embedHostDomainsInput: string[];
```

- *Type:* string[]

---

##### `feedbackUrlInput`<sup>Optional</sup> <a name="feedbackUrlInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrlInput"></a>

```typescript
public readonly feedbackUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `storageConnectorsInput`<sup>Optional</sup> <a name="storageConnectorsInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.storageConnectorsInput"></a>

```typescript
public readonly storageConnectorsInput: IResolvable | AppstreamStackStorageConnectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.userSettingsInput"></a>

```typescript
public readonly userSettingsInput: IResolvable | AppstreamStackUserSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `embedHostDomains`<sup>Required</sup> <a name="embedHostDomains" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.embedHostDomains"></a>

```typescript
public readonly embedHostDomains: string[];
```

- *Type:* string[]

---

##### `feedbackUrl`<sup>Required</sup> <a name="feedbackUrl" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.feedbackUrl"></a>

```typescript
public readonly feedbackUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appstreamStack.AppstreamStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamStackAccessEndpoints <a name="AppstreamStackAccessEndpoints" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

const appstreamStackAccessEndpoints: appstreamStack.AppstreamStackAccessEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#endpoint_type AppstreamStack#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId">vpceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#vpce_id AppstreamStack#vpce_id}. |

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#endpoint_type AppstreamStack#endpoint_type}.

---

##### `vpceId`<sup>Optional</sup> <a name="vpceId" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#vpce_id AppstreamStack#vpce_id}.

---

### AppstreamStackApplicationSettings <a name="AppstreamStackApplicationSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

const appstreamStackApplicationSettings: appstreamStack.AppstreamStackApplicationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#enabled AppstreamStack#enabled}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#settings_group AppstreamStack#settings_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#enabled AppstreamStack#enabled}.

---

##### `settingsGroup`<sup>Optional</sup> <a name="settingsGroup" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#settings_group AppstreamStack#settings_group}.

---

### AppstreamStackConfig <a name="AppstreamStackConfig" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

const appstreamStackConfig: appstreamStack.AppstreamStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#name AppstreamStack#name}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.accessEndpoints">accessEndpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | access_endpoints block. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#description AppstreamStack#description}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#display_name AppstreamStack#display_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.embedHostDomains">embedHostDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.feedbackUrl">feedbackUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#feedback_url AppstreamStack#feedback_url}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#id AppstreamStack#id}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#redirect_url AppstreamStack#redirect_url}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.storageConnectors">storageConnectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | storage_connectors block. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#tags AppstreamStack#tags}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#tags_all AppstreamStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.userSettings">userSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | user_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#name AppstreamStack#name}.

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: IResolvable | AppstreamStackAccessEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

access_endpoints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: AppstreamStackApplicationSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#description AppstreamStack#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#display_name AppstreamStack#display_name}.

---

##### `embedHostDomains`<sup>Optional</sup> <a name="embedHostDomains" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.embedHostDomains"></a>

```typescript
public readonly embedHostDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}.

---

##### `feedbackUrl`<sup>Optional</sup> <a name="feedbackUrl" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.feedbackUrl"></a>

```typescript
public readonly feedbackUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#feedback_url AppstreamStack#feedback_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#id AppstreamStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#redirect_url AppstreamStack#redirect_url}.

---

##### `storageConnectors`<sup>Optional</sup> <a name="storageConnectors" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.storageConnectors"></a>

```typescript
public readonly storageConnectors: IResolvable | AppstreamStackStorageConnectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

storage_connectors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#tags AppstreamStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#tags_all AppstreamStack#tags_all}.

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStackConfig.property.userSettings"></a>

```typescript
public readonly userSettings: IResolvable | AppstreamStackUserSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

user_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#user_settings AppstreamStack#user_settings}

---

### AppstreamStackStorageConnectors <a name="AppstreamStackStorageConnectors" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

const appstreamStackStorageConnectors: appstreamStack.AppstreamStackStorageConnectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.connectorType">connectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#connector_type AppstreamStack#connector_type}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.domains">domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#domains AppstreamStack#domains}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#resource_identifier AppstreamStack#resource_identifier}. |

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#connector_type AppstreamStack#connector_type}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#domains AppstreamStack#domains}.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#resource_identifier AppstreamStack#resource_identifier}.

---

### AppstreamStackUserSettings <a name="AppstreamStackUserSettings" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

const appstreamStackUserSettings: appstreamStack.AppstreamStackUserSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#action AppstreamStack#action}. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#permission AppstreamStack#permission}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#action AppstreamStack#action}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#permission AppstreamStack#permission}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamStackAccessEndpointsList <a name="AppstreamStackAccessEndpointsList" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStackAccessEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.get"></a>

```typescript
public get(index: number): AppstreamStackAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackAccessEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---


### AppstreamStackAccessEndpointsOutputReference <a name="AppstreamStackAccessEndpointsOutputReference" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStackAccessEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId">resetVpceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpceId` <a name="resetVpceId" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId"></a>

```typescript
public resetVpceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput">vpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId">vpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `vpceIdInput`<sup>Optional</sup> <a name="vpceIdInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput"></a>

```typescript
public readonly vpceIdInput: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `vpceId`<sup>Required</sup> <a name="vpceId" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppstreamStackAccessEndpoints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a> | cdktf.IResolvable

---


### AppstreamStackApplicationSettingsOutputReference <a name="AppstreamStackApplicationSettingsOutputReference" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStackApplicationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup">resetSettingsGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSettingsGroup` <a name="resetSettingsGroup" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup"></a>

```typescript
public resetSettingsGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput">settingsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsGroupInput`<sup>Optional</sup> <a name="settingsGroupInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```typescript
public readonly settingsGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsGroup`<sup>Required</sup> <a name="settingsGroup" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppstreamStackApplicationSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---


### AppstreamStackStorageConnectorsList <a name="AppstreamStackStorageConnectorsList" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStackStorageConnectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.get"></a>

```typescript
public get(index: number): AppstreamStackStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackStorageConnectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---


### AppstreamStackStorageConnectorsOutputReference <a name="AppstreamStackStorageConnectorsOutputReference" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStackStorageConnectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier"></a>

```typescript
public resetResourceIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput">connectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```typescript
public readonly connectorTypeInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput"></a>

```typescript
public readonly resourceIdentifierInput: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppstreamStackStorageConnectors | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a> | cdktf.IResolvable

---


### AppstreamStackUserSettingsList <a name="AppstreamStackUserSettingsList" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStackUserSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.get"></a>

```typescript
public get(index: number): AppstreamStackUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackUserSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---


### AppstreamStackUserSettingsOutputReference <a name="AppstreamStackUserSettingsOutputReference" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktf/provider-aws'

new appstreamStack.AppstreamStackUserSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppstreamStackUserSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a> | cdktf.IResolvable

---



