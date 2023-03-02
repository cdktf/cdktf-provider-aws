# `directoryServiceDirectory` Submodule <a name="`directoryServiceDirectory` Submodule" id="@cdktf/provider-aws.directoryServiceDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceDirectory <a name="DirectoryServiceDirectory" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory aws_directory_service_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

new directoryServiceDirectory.DirectoryServiceDirectory(scope: Construct, id: string, config: DirectoryServiceDirectoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig">DirectoryServiceDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig">DirectoryServiceDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings">putConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings">resetConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers">resetDesiredNumberOfDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso">resetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings">resetVpcSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConnectSettings` <a name="putConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings"></a>

```typescript
public putConnectSettings(value: DirectoryServiceDirectoryConnectSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts"></a>

```typescript
public putTimeouts(value: DirectoryServiceDirectoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings"></a>

```typescript
public putVpcSettings(value: DirectoryServiceDirectoryVpcSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConnectSettings` <a name="resetConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings"></a>

```typescript
public resetConnectSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDesiredNumberOfDomainControllers` <a name="resetDesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers"></a>

```typescript
public resetDesiredNumberOfDomainControllers(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetEnableSso` <a name="resetEnableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso"></a>

```typescript
public resetEnableSso(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShortName` <a name="resetShortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName"></a>

```typescript
public resetShortName(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVpcSettings` <a name="resetVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings"></a>

```typescript
public resetVpcSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

directoryServiceDirectory.DirectoryServiceDirectory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl">accessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings">connectSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput">connectSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput">desiredNumberOfDomainControllersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput">enableSsoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso">enableSso</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl"></a>

```typescript
public readonly accessUrl: string;
```

- *Type:* string

---

##### `connectSettings`<sup>Required</sup> <a name="connectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings"></a>

```typescript
public readonly connectSettings: DirectoryServiceDirectoryConnectSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a>

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceDirectoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a>

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DirectoryServiceDirectoryVpcSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `connectSettingsInput`<sup>Optional</sup> <a name="connectSettingsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput"></a>

```typescript
public readonly connectSettingsInput: DirectoryServiceDirectoryConnectSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `desiredNumberOfDomainControllersInput`<sup>Optional</sup> <a name="desiredNumberOfDomainControllersInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput"></a>

```typescript
public readonly desiredNumberOfDomainControllersInput: number;
```

- *Type:* number

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `enableSsoInput`<sup>Optional</sup> <a name="enableSsoInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput"></a>

```typescript
public readonly enableSsoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DirectoryServiceDirectoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput"></a>

```typescript
public readonly vpcSettingsInput: DirectoryServiceDirectoryVpcSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredNumberOfDomainControllers`<sup>Required</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers"></a>

```typescript
public readonly desiredNumberOfDomainControllers: number;
```

- *Type:* number

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso"></a>

```typescript
public readonly enableSso: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceDirectoryConfig <a name="DirectoryServiceDirectoryConfig" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

const directoryServiceDirectoryConfig: directoryServiceDirectory.DirectoryServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings">connectSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers">desiredNumberOfDomainControllers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition">edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso">enableSso</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName">shortName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `connectSettings`<sup>Optional</sup> <a name="connectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings"></a>

```typescript
public readonly connectSettings: DirectoryServiceDirectoryConnectSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `desiredNumberOfDomainControllers`<sup>Optional</sup> <a name="desiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers"></a>

```typescript
public readonly desiredNumberOfDomainControllers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso"></a>

```typescript
public readonly enableSso: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceDirectoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `vpcSettings`<sup>Optional</sup> <a name="vpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DirectoryServiceDirectoryVpcSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

### DirectoryServiceDirectoryConnectSettings <a name="DirectoryServiceDirectoryConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

const directoryServiceDirectoryConnectSettings: directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps">customerDnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername">customerUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `customerDnsIps`<sup>Required</sup> <a name="customerDnsIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps"></a>

```typescript
public readonly customerDnsIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}.

---

##### `customerUsername`<sup>Required</sup> <a name="customerUsername" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername"></a>

```typescript
public readonly customerUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

### DirectoryServiceDirectoryTimeouts <a name="DirectoryServiceDirectoryTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

const directoryServiceDirectoryTimeouts: directoryServiceDirectory.DirectoryServiceDirectoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}.

---

### DirectoryServiceDirectoryVpcSettings <a name="DirectoryServiceDirectoryVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

const directoryServiceDirectoryVpcSettings: directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceDirectoryConnectSettingsOutputReference <a name="DirectoryServiceDirectoryConnectSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

new directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps">connectIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput">customerDnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput">customerUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps">customerDnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername">customerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `connectIps`<sup>Required</sup> <a name="connectIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps"></a>

```typescript
public readonly connectIps: string[];
```

- *Type:* string[]

---

##### `customerDnsIpsInput`<sup>Optional</sup> <a name="customerDnsIpsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput"></a>

```typescript
public readonly customerDnsIpsInput: string[];
```

- *Type:* string[]

---

##### `customerUsernameInput`<sup>Optional</sup> <a name="customerUsernameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput"></a>

```typescript
public readonly customerUsernameInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `customerDnsIps`<sup>Required</sup> <a name="customerDnsIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps"></a>

```typescript
public readonly customerDnsIps: string[];
```

- *Type:* string[]

---

##### `customerUsername`<sup>Required</sup> <a name="customerUsername" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername"></a>

```typescript
public readonly customerUsername: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DirectoryServiceDirectoryConnectSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---


### DirectoryServiceDirectoryTimeoutsOutputReference <a name="DirectoryServiceDirectoryTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

new directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DirectoryServiceDirectoryTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a> | cdktf.IResolvable

---


### DirectoryServiceDirectoryVpcSettingsOutputReference <a name="DirectoryServiceDirectoryVpcSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer"></a>

```typescript
import { directoryServiceDirectory } from '@cdktf/provider-aws'

new directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DirectoryServiceDirectoryVpcSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---



