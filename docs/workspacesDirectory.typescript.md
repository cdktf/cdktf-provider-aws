# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktf/provider-aws.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory aws_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

new workspacesDirectory.WorkspacesDirectory(scope: Construct, id: string, config: WorkspacesDirectoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions">putSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">putWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">putWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">resetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions">resetSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">resetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">resetWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSelfServicePermissions` <a name="putSelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions"></a>

```typescript
public putSelfServicePermissions(value: WorkspacesDirectorySelfServicePermissions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `putWorkspaceAccessProperties` <a name="putWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```typescript
public putWorkspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `putWorkspaceCreationProperties` <a name="putWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```typescript
public putWorkspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpGroupIds` <a name="resetIpGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```typescript
public resetIpGroupIds(): void
```

##### `resetSelfServicePermissions` <a name="resetSelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions"></a>

```typescript
public resetSelfServicePermissions(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWorkspaceAccessProperties` <a name="resetWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```typescript
public resetWorkspaceAccessProperties(): void
```

##### `resetWorkspaceCreationProperties` <a name="resetWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```typescript
public resetWorkspaceCreationProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

workspacesDirectory.WorkspacesDirectory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

workspacesDirectory.WorkspacesDirectory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

workspacesDirectory.WorkspacesDirectory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName">customerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType">directoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode">registrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions">selfServicePermissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">ipGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput">selfServicePermissionsInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">workspaceAccessPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">workspaceCreationPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">ipGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `customerUserName`<sup>Required</sup> <a name="customerUserName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```typescript
public readonly customerUserName: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```typescript
public readonly directoryType: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

---

##### `registrationCode`<sup>Required</sup> <a name="registrationCode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```typescript
public readonly registrationCode: string;
```

- *Type:* string

---

##### `selfServicePermissions`<sup>Required</sup> <a name="selfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions"></a>

```typescript
public readonly selfServicePermissions: WorkspacesDirectorySelfServicePermissionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a>

---

##### `workspaceAccessProperties`<sup>Required</sup> <a name="workspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```typescript
public readonly workspaceAccessProperties: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspaceCreationProperties`<sup>Required</sup> <a name="workspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```typescript
public readonly workspaceCreationProperties: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```typescript
public readonly workspaceSecurityGroupId: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipGroupIdsInput`<sup>Optional</sup> <a name="ipGroupIdsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```typescript
public readonly ipGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `selfServicePermissionsInput`<sup>Optional</sup> <a name="selfServicePermissionsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput"></a>

```typescript
public readonly selfServicePermissionsInput: WorkspacesDirectorySelfServicePermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceAccessPropertiesInput`<sup>Optional</sup> <a name="workspaceAccessPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```typescript
public readonly workspaceAccessPropertiesInput: WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `workspaceCreationPropertiesInput`<sup>Optional</sup> <a name="workspaceCreationPropertiesInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```typescript
public readonly workspaceCreationPropertiesInput: WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipGroupIds`<sup>Required</sup> <a name="ipGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```typescript
public readonly ipGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

const workspacesDirectoryConfig: workspacesDirectory.WorkspacesDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">ipGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions">selfServicePermissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | self_service_permissions block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | workspace_access_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | workspace_creation_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipGroupIds`<sup>Optional</sup> <a name="ipGroupIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```typescript
public readonly ipGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}.

---

##### `selfServicePermissions`<sup>Optional</sup> <a name="selfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions"></a>

```typescript
public readonly selfServicePermissions: WorkspacesDirectorySelfServicePermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

self_service_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}.

---

##### `workspaceAccessProperties`<sup>Optional</sup> <a name="workspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```typescript
public readonly workspaceAccessProperties: WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

workspace_access_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspaceCreationProperties`<sup>Optional</sup> <a name="workspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```typescript
public readonly workspaceCreationProperties: WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

workspace_creation_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

### WorkspacesDirectorySelfServicePermissions <a name="WorkspacesDirectorySelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

const workspacesDirectorySelfServicePermissions: workspacesDirectory.WorkspacesDirectorySelfServicePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType">changeComputeType</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace">restartWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode">switchRunningMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}. |

---

##### `changeComputeType`<sup>Optional</sup> <a name="changeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType"></a>

```typescript
public readonly changeComputeType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}.

---

##### `increaseVolumeSize`<sup>Optional</sup> <a name="increaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize"></a>

```typescript
public readonly increaseVolumeSize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}.

---

##### `rebuildWorkspace`<sup>Optional</sup> <a name="rebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace"></a>

```typescript
public readonly rebuildWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}.

---

##### `restartWorkspace`<sup>Optional</sup> <a name="restartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace"></a>

```typescript
public readonly restartWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}.

---

##### `switchRunningMode`<sup>Optional</sup> <a name="switchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode"></a>

```typescript
public readonly switchRunningMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}.

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

const workspacesDirectoryWorkspaceAccessProperties: workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos">deviceTypeChromeos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">deviceTypeIos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient">deviceTypeZeroclient</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}. |

---

##### `deviceTypeAndroid`<sup>Optional</sup> <a name="deviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```typescript
public readonly deviceTypeAndroid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}.

---

##### `deviceTypeChromeos`<sup>Optional</sup> <a name="deviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos"></a>

```typescript
public readonly deviceTypeChromeos: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}.

---

##### `deviceTypeIos`<sup>Optional</sup> <a name="deviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```typescript
public readonly deviceTypeIos: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}.

---

##### `deviceTypeLinux`<sup>Optional</sup> <a name="deviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```typescript
public readonly deviceTypeLinux: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}.

---

##### `deviceTypeOsx`<sup>Optional</sup> <a name="deviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```typescript
public readonly deviceTypeOsx: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}.

---

##### `deviceTypeWeb`<sup>Optional</sup> <a name="deviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```typescript
public readonly deviceTypeWeb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}.

---

##### `deviceTypeWindows`<sup>Optional</sup> <a name="deviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```typescript
public readonly deviceTypeWindows: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}.

---

##### `deviceTypeZeroclient`<sup>Optional</sup> <a name="deviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient"></a>

```typescript
public readonly deviceTypeZeroclient: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}.

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

const workspacesDirectoryWorkspaceCreationProperties: workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">defaultOu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}. |

---

##### `customSecurityGroupId`<sup>Optional</sup> <a name="customSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```typescript
public readonly customSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}.

---

##### `defaultOu`<sup>Optional</sup> <a name="defaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```typescript
public readonly defaultOu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}.

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}.

---

##### `enableMaintenanceMode`<sup>Optional</sup> <a name="enableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```typescript
public readonly enableMaintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}.

---

##### `userEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```typescript
public readonly userEnabledAsLocalAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectorySelfServicePermissionsOutputReference <a name="WorkspacesDirectorySelfServicePermissionsOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

new workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType">resetChangeComputeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize">resetIncreaseVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace">resetRebuildWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace">resetRestartWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode">resetSwitchRunningMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangeComputeType` <a name="resetChangeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType"></a>

```typescript
public resetChangeComputeType(): void
```

##### `resetIncreaseVolumeSize` <a name="resetIncreaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```typescript
public resetIncreaseVolumeSize(): void
```

##### `resetRebuildWorkspace` <a name="resetRebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace"></a>

```typescript
public resetRebuildWorkspace(): void
```

##### `resetRestartWorkspace` <a name="resetRestartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace"></a>

```typescript
public resetRestartWorkspace(): void
```

##### `resetSwitchRunningMode` <a name="resetSwitchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode"></a>

```typescript
public resetSwitchRunningMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput">changeComputeTypeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput">increaseVolumeSizeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput">rebuildWorkspaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput">restartWorkspaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput">switchRunningModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType">changeComputeType</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace">restartWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode">switchRunningMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeComputeTypeInput`<sup>Optional</sup> <a name="changeComputeTypeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```typescript
public readonly changeComputeTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `increaseVolumeSizeInput`<sup>Optional</sup> <a name="increaseVolumeSizeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```typescript
public readonly increaseVolumeSizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rebuildWorkspaceInput`<sup>Optional</sup> <a name="rebuildWorkspaceInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```typescript
public readonly rebuildWorkspaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restartWorkspaceInput`<sup>Optional</sup> <a name="restartWorkspaceInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```typescript
public readonly restartWorkspaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `switchRunningModeInput`<sup>Optional</sup> <a name="switchRunningModeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput"></a>

```typescript
public readonly switchRunningModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `changeComputeType`<sup>Required</sup> <a name="changeComputeType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType"></a>

```typescript
public readonly changeComputeType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `increaseVolumeSize`<sup>Required</sup> <a name="increaseVolumeSize" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize"></a>

```typescript
public readonly increaseVolumeSize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rebuildWorkspace`<sup>Required</sup> <a name="rebuildWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace"></a>

```typescript
public readonly rebuildWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restartWorkspace`<sup>Required</sup> <a name="restartWorkspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace"></a>

```typescript
public readonly restartWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `switchRunningMode`<sup>Required</sup> <a name="switchRunningMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode"></a>

```typescript
public readonly switchRunningMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesDirectorySelfServicePermissions;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

new workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">resetDeviceTypeAndroid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos">resetDeviceTypeChromeos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">resetDeviceTypeIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">resetDeviceTypeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">resetDeviceTypeOsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">resetDeviceTypeWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">resetDeviceTypeWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient">resetDeviceTypeZeroclient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceTypeAndroid` <a name="resetDeviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```typescript
public resetDeviceTypeAndroid(): void
```

##### `resetDeviceTypeChromeos` <a name="resetDeviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos"></a>

```typescript
public resetDeviceTypeChromeos(): void
```

##### `resetDeviceTypeIos` <a name="resetDeviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```typescript
public resetDeviceTypeIos(): void
```

##### `resetDeviceTypeLinux` <a name="resetDeviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```typescript
public resetDeviceTypeLinux(): void
```

##### `resetDeviceTypeOsx` <a name="resetDeviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```typescript
public resetDeviceTypeOsx(): void
```

##### `resetDeviceTypeWeb` <a name="resetDeviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```typescript
public resetDeviceTypeWeb(): void
```

##### `resetDeviceTypeWindows` <a name="resetDeviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```typescript
public resetDeviceTypeWindows(): void
```

##### `resetDeviceTypeZeroclient` <a name="resetDeviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient"></a>

```typescript
public resetDeviceTypeZeroclient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">deviceTypeAndroidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput">deviceTypeChromeosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">deviceTypeIosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">deviceTypeLinuxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">deviceTypeOsxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">deviceTypeWebInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">deviceTypeWindowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput">deviceTypeZeroclientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos">deviceTypeChromeos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">deviceTypeIos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient">deviceTypeZeroclient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceTypeAndroidInput`<sup>Optional</sup> <a name="deviceTypeAndroidInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```typescript
public readonly deviceTypeAndroidInput: string;
```

- *Type:* string

---

##### `deviceTypeChromeosInput`<sup>Optional</sup> <a name="deviceTypeChromeosInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput"></a>

```typescript
public readonly deviceTypeChromeosInput: string;
```

- *Type:* string

---

##### `deviceTypeIosInput`<sup>Optional</sup> <a name="deviceTypeIosInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```typescript
public readonly deviceTypeIosInput: string;
```

- *Type:* string

---

##### `deviceTypeLinuxInput`<sup>Optional</sup> <a name="deviceTypeLinuxInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```typescript
public readonly deviceTypeLinuxInput: string;
```

- *Type:* string

---

##### `deviceTypeOsxInput`<sup>Optional</sup> <a name="deviceTypeOsxInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```typescript
public readonly deviceTypeOsxInput: string;
```

- *Type:* string

---

##### `deviceTypeWebInput`<sup>Optional</sup> <a name="deviceTypeWebInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```typescript
public readonly deviceTypeWebInput: string;
```

- *Type:* string

---

##### `deviceTypeWindowsInput`<sup>Optional</sup> <a name="deviceTypeWindowsInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```typescript
public readonly deviceTypeWindowsInput: string;
```

- *Type:* string

---

##### `deviceTypeZeroclientInput`<sup>Optional</sup> <a name="deviceTypeZeroclientInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput"></a>

```typescript
public readonly deviceTypeZeroclientInput: string;
```

- *Type:* string

---

##### `deviceTypeAndroid`<sup>Required</sup> <a name="deviceTypeAndroid" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```typescript
public readonly deviceTypeAndroid: string;
```

- *Type:* string

---

##### `deviceTypeChromeos`<sup>Required</sup> <a name="deviceTypeChromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos"></a>

```typescript
public readonly deviceTypeChromeos: string;
```

- *Type:* string

---

##### `deviceTypeIos`<sup>Required</sup> <a name="deviceTypeIos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```typescript
public readonly deviceTypeIos: string;
```

- *Type:* string

---

##### `deviceTypeLinux`<sup>Required</sup> <a name="deviceTypeLinux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```typescript
public readonly deviceTypeLinux: string;
```

- *Type:* string

---

##### `deviceTypeOsx`<sup>Required</sup> <a name="deviceTypeOsx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```typescript
public readonly deviceTypeOsx: string;
```

- *Type:* string

---

##### `deviceTypeWeb`<sup>Required</sup> <a name="deviceTypeWeb" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```typescript
public readonly deviceTypeWeb: string;
```

- *Type:* string

---

##### `deviceTypeWindows`<sup>Required</sup> <a name="deviceTypeWindows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```typescript
public readonly deviceTypeWindows: string;
```

- *Type:* string

---

##### `deviceTypeZeroclient`<sup>Required</sup> <a name="deviceTypeZeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient"></a>

```typescript
public readonly deviceTypeZeroclient: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/provider-aws'

new workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">resetCustomSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">resetDefaultOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">resetEnableMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">resetUserEnabledAsLocalAdministrator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSecurityGroupId` <a name="resetCustomSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```typescript
public resetCustomSecurityGroupId(): void
```

##### `resetDefaultOu` <a name="resetDefaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```typescript
public resetDefaultOu(): void
```

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```typescript
public resetEnableInternetAccess(): void
```

##### `resetEnableMaintenanceMode` <a name="resetEnableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```typescript
public resetEnableMaintenanceMode(): void
```

##### `resetUserEnabledAsLocalAdministrator` <a name="resetUserEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```typescript
public resetUserEnabledAsLocalAdministrator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">customSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">defaultOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">enableMaintenanceModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">userEnabledAsLocalAdministratorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">defaultOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSecurityGroupIdInput`<sup>Optional</sup> <a name="customSecurityGroupIdInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```typescript
public readonly customSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `defaultOuInput`<sup>Optional</sup> <a name="defaultOuInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```typescript
public readonly defaultOuInput: string;
```

- *Type:* string

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```typescript
public readonly enableInternetAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMaintenanceModeInput`<sup>Optional</sup> <a name="enableMaintenanceModeInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```typescript
public readonly enableMaintenanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="userEnabledAsLocalAdministratorInput" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```typescript
public readonly userEnabledAsLocalAdministratorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customSecurityGroupId`<sup>Required</sup> <a name="customSecurityGroupId" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```typescript
public readonly customSecurityGroupId: string;
```

- *Type:* string

---

##### `defaultOu`<sup>Required</sup> <a name="defaultOu" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```typescript
public readonly defaultOu: string;
```

- *Type:* string

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMaintenanceMode`<sup>Required</sup> <a name="enableMaintenanceMode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```typescript
public readonly enableMaintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userEnabledAsLocalAdministrator`<sup>Required</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```typescript
public readonly userEnabledAsLocalAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



