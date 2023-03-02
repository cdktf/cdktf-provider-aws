# `connectUser` Submodule <a name="`connectUser` Submodule" id="@cdktf/provider-aws.connectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUser <a name="ConnectUser" id="@cdktf/provider-aws.connectUser.ConnectUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user aws_connect_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

new connectUser.ConnectUser(scope: Construct, id: string, config: ConnectUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig">ConnectUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig">ConnectUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo">putIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig">putPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetDirectoryUserId">resetDirectoryUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetHierarchyGroupId">resetHierarchyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetIdentityInfo">resetIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUser.ConnectUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectUser.ConnectUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectUser.ConnectUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIdentityInfo` <a name="putIdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo"></a>

```typescript
public putIdentityInfo(value: ConnectUserIdentityInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `putPhoneConfig` <a name="putPhoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig"></a>

```typescript
public putPhoneConfig(value: ConnectUserPhoneConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `resetDirectoryUserId` <a name="resetDirectoryUserId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetDirectoryUserId"></a>

```typescript
public resetDirectoryUserId(): void
```

##### `resetHierarchyGroupId` <a name="resetHierarchyGroupId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetHierarchyGroupId"></a>

```typescript
public resetHierarchyGroupId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityInfo` <a name="resetIdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUser.resetIdentityInfo"></a>

```typescript
public resetIdentityInfo(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.connectUser.ConnectUser.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectUser.ConnectUser.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectUser.ConnectUser.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectUser.ConnectUser.isConstruct"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

connectUser.ConnectUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUser.ConnectUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

connectUser.ConnectUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

connectUser.ConnectUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfo">identityInfo</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserIdInput">directoryUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupIdInput">hierarchyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfoInput">identityInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfigInput">phoneConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileIdInput">routingProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIdsInput">securityProfileIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserId">directoryUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupId">hierarchyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIds">securityProfileIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectUser.ConnectUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectUser.ConnectUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUser.ConnectUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUser.ConnectUser.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectUser.ConnectUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUser.ConnectUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUser.ConnectUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUser.ConnectUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `identityInfo`<sup>Required</sup> <a name="identityInfo" id="@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfo"></a>

```typescript
public readonly identityInfo: ConnectUserIdentityInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a>

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: ConnectUserPhoneConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `directoryUserIdInput`<sup>Optional</sup> <a name="directoryUserIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserIdInput"></a>

```typescript
public readonly directoryUserIdInput: string;
```

- *Type:* string

---

##### `hierarchyGroupIdInput`<sup>Optional</sup> <a name="hierarchyGroupIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupIdInput"></a>

```typescript
public readonly hierarchyGroupIdInput: string;
```

- *Type:* string

---

##### `identityInfoInput`<sup>Optional</sup> <a name="identityInfoInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfoInput"></a>

```typescript
public readonly identityInfoInput: ConnectUserIdentityInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `phoneConfigInput`<sup>Optional</sup> <a name="phoneConfigInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfigInput"></a>

```typescript
public readonly phoneConfigInput: ConnectUserPhoneConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `routingProfileIdInput`<sup>Optional</sup> <a name="routingProfileIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileIdInput"></a>

```typescript
public readonly routingProfileIdInput: string;
```

- *Type:* string

---

##### `securityProfileIdsInput`<sup>Optional</sup> <a name="securityProfileIdsInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIdsInput"></a>

```typescript
public readonly securityProfileIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `directoryUserId`<sup>Required</sup> <a name="directoryUserId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserId"></a>

```typescript
public readonly directoryUserId: string;
```

- *Type:* string

---

##### `hierarchyGroupId`<sup>Required</sup> <a name="hierarchyGroupId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupId"></a>

```typescript
public readonly hierarchyGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUser.ConnectUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.connectUser.ConnectUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

---

##### `securityProfileIds`<sup>Required</sup> <a name="securityProfileIds" id="@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIds"></a>

```typescript
public readonly securityProfileIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserConfig <a name="ConnectUserConfig" id="@cdktf/provider-aws.connectUser.ConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.Initializer"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

const connectUserConfig: connectUser.ConnectUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | phone_config block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.securityProfileIds">securityProfileIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.directoryUserId">directoryUserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.hierarchyGroupId">hierarchyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.identityInfo">identityInfo</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | identity_info block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}.

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: ConnectUserPhoneConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_config ConnectUser#phone_config}

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}.

---

##### `securityProfileIds`<sup>Required</sup> <a name="securityProfileIds" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.securityProfileIds"></a>

```typescript
public readonly securityProfileIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}.

---

##### `directoryUserId`<sup>Optional</sup> <a name="directoryUserId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.directoryUserId"></a>

```typescript
public readonly directoryUserId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}.

---

##### `hierarchyGroupId`<sup>Optional</sup> <a name="hierarchyGroupId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.hierarchyGroupId"></a>

```typescript
public readonly hierarchyGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityInfo`<sup>Optional</sup> <a name="identityInfo" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.identityInfo"></a>

```typescript
public readonly identityInfo: ConnectUserIdentityInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

identity_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}.

---

### ConnectUserIdentityInfo <a name="ConnectUserIdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.Initializer"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

const connectUserIdentityInfo: connectUser.ConnectUserIdentityInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}.

---

### ConnectUserPhoneConfig <a name="ConnectUserPhoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.Initializer"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

const connectUserPhoneConfig: connectUser.ConnectUserPhoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.phoneType">phoneType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}. |

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}.

---

##### `afterContactWorkTimeLimit`<sup>Optional</sup> <a name="afterContactWorkTimeLimit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}.

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}.

---

##### `deskPhoneNumber`<sup>Optional</sup> <a name="deskPhoneNumber" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

```typescript
public readonly deskPhoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserIdentityInfoOutputReference <a name="ConnectUserIdentityInfoOutputReference" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

new connectUser.ConnectUserIdentityInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName">resetLastName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserIdentityInfo;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---


### ConnectUserPhoneConfigOutputReference <a name="ConnectUserPhoneConfigOutputReference" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer"></a>

```typescript
import { connectUser } from '@cdktf/provider-aws'

new connectUser.ConnectUserPhoneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit">resetAfterContactWorkTimeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept">resetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber">resetDeskPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterContactWorkTimeLimit` <a name="resetAfterContactWorkTimeLimit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```typescript
public resetAfterContactWorkTimeLimit(): void
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept"></a>

```typescript
public resetAutoAccept(): void
```

##### `resetDeskPhoneNumber` <a name="resetDeskPhoneNumber" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber"></a>

```typescript
public resetDeskPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput">afterContactWorkTimeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput">autoAcceptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput">deskPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput">phoneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType">phoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="afterContactWorkTimeLimitInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```typescript
public readonly afterContactWorkTimeLimitInput: number;
```

- *Type:* number

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput"></a>

```typescript
public readonly autoAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deskPhoneNumberInput`<sup>Optional</sup> <a name="deskPhoneNumberInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput"></a>

```typescript
public readonly deskPhoneNumberInput: string;
```

- *Type:* string

---

##### `phoneTypeInput`<sup>Optional</sup> <a name="phoneTypeInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput"></a>

```typescript
public readonly phoneTypeInput: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deskPhoneNumber`<sup>Required</sup> <a name="deskPhoneNumber" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```typescript
public readonly deskPhoneNumber: string;
```

- *Type:* string

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserPhoneConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---



