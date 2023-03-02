# `organizationsAccount` Submodule <a name="`organizationsAccount` Submodule" id="@cdktf/provider-aws.organizationsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsAccount <a name="OrganizationsAccount" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_account aws_organizations_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer"></a>

```typescript
import { organizationsAccount } from '@cdktf/provider-aws'

new organizationsAccount.OrganizationsAccount(scope: Construct, id: string, config: OrganizationsAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig">OrganizationsAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig">OrganizationsAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCloseOnDeletion">resetCloseOnDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCreateGovcloud">resetCreateGovcloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetIamUserAccessToBilling">resetIamUserAccessToBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCloseOnDeletion` <a name="resetCloseOnDeletion" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCloseOnDeletion"></a>

```typescript
public resetCloseOnDeletion(): void
```

##### `resetCreateGovcloud` <a name="resetCreateGovcloud" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCreateGovcloud"></a>

```typescript
public resetCreateGovcloud(): void
```

##### `resetIamUserAccessToBilling` <a name="resetIamUserAccessToBilling" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetIamUserAccessToBilling"></a>

```typescript
public resetIamUserAccessToBilling(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isConstruct"></a>

```typescript
import { organizationsAccount } from '@cdktf/provider-aws'

organizationsAccount.OrganizationsAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformElement"></a>

```typescript
import { organizationsAccount } from '@cdktf/provider-aws'

organizationsAccount.OrganizationsAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformResource"></a>

```typescript
import { organizationsAccount } from '@cdktf/provider-aws'

organizationsAccount.OrganizationsAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.govcloudId">govcloudId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedMethod">joinedMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedTimestamp">joinedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletionInput">closeOnDeletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloudInput">createGovcloudInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBillingInput">iamUserAccessToBillingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletion">closeOnDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloud">createGovcloud</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBilling">iamUserAccessToBilling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `govcloudId`<sup>Required</sup> <a name="govcloudId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.govcloudId"></a>

```typescript
public readonly govcloudId: string;
```

- *Type:* string

---

##### `joinedMethod`<sup>Required</sup> <a name="joinedMethod" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedMethod"></a>

```typescript
public readonly joinedMethod: string;
```

- *Type:* string

---

##### `joinedTimestamp`<sup>Required</sup> <a name="joinedTimestamp" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedTimestamp"></a>

```typescript
public readonly joinedTimestamp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `closeOnDeletionInput`<sup>Optional</sup> <a name="closeOnDeletionInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletionInput"></a>

```typescript
public readonly closeOnDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createGovcloudInput`<sup>Optional</sup> <a name="createGovcloudInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloudInput"></a>

```typescript
public readonly createGovcloudInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `iamUserAccessToBillingInput`<sup>Optional</sup> <a name="iamUserAccessToBillingInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBillingInput"></a>

```typescript
public readonly iamUserAccessToBillingInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `closeOnDeletion`<sup>Required</sup> <a name="closeOnDeletion" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletion"></a>

```typescript
public readonly closeOnDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createGovcloud`<sup>Required</sup> <a name="createGovcloud" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloud"></a>

```typescript
public readonly createGovcloud: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `iamUserAccessToBilling`<sup>Required</sup> <a name="iamUserAccessToBilling" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBilling"></a>

```typescript
public readonly iamUserAccessToBilling: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsAccountConfig <a name="OrganizationsAccountConfig" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.Initializer"></a>

```typescript
import { organizationsAccount } from '@cdktf/provider-aws'

const organizationsAccountConfig: organizationsAccount.OrganizationsAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#email OrganizationsAccount#email}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#name OrganizationsAccount#name}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.closeOnDeletion">closeOnDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#close_on_deletion OrganizationsAccount#close_on_deletion}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.createGovcloud">createGovcloud</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#create_govcloud OrganizationsAccount#create_govcloud}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.iamUserAccessToBilling">iamUserAccessToBilling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#id OrganizationsAccount#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#parent_id OrganizationsAccount#parent_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#role_name OrganizationsAccount#role_name}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#tags OrganizationsAccount#tags}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#tags_all OrganizationsAccount#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#email OrganizationsAccount#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#name OrganizationsAccount#name}.

---

##### `closeOnDeletion`<sup>Optional</sup> <a name="closeOnDeletion" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.closeOnDeletion"></a>

```typescript
public readonly closeOnDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#close_on_deletion OrganizationsAccount#close_on_deletion}.

---

##### `createGovcloud`<sup>Optional</sup> <a name="createGovcloud" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.createGovcloud"></a>

```typescript
public readonly createGovcloud: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#create_govcloud OrganizationsAccount#create_govcloud}.

---

##### `iamUserAccessToBilling`<sup>Optional</sup> <a name="iamUserAccessToBilling" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.iamUserAccessToBilling"></a>

```typescript
public readonly iamUserAccessToBilling: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#id OrganizationsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#parent_id OrganizationsAccount#parent_id}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#role_name OrganizationsAccount#role_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#tags OrganizationsAccount#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account#tags_all OrganizationsAccount#tags_all}.

---



