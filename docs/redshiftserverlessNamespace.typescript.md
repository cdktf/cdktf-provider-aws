# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktf/provider-aws.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace aws_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktf/provider-aws'

new redshiftserverlessNamespace.RedshiftserverlessNamespace(scope: Construct, id: string, config: RedshiftserverlessNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId">resetAdminPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">resetAdminUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">resetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">resetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword">resetManageAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdminPasswordSecretKmsKeyId` <a name="resetAdminPasswordSecretKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId"></a>

```typescript
public resetAdminPasswordSecretKmsKeyId(): void
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```typescript
public resetAdminUsername(): void
```

##### `resetAdminUserPassword` <a name="resetAdminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```typescript
public resetAdminUserPassword(): void
```

##### `resetDbName` <a name="resetDbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDefaultIamRoleArn` <a name="resetDefaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```typescript
public resetDefaultIamRoleArn(): void
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLogExports` <a name="resetLogExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```typescript
public resetLogExports(): void
```

##### `resetManageAdminPassword` <a name="resetManageAdminPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword"></a>

```typescript
public resetManageAdminPassword(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktf/provider-aws'

redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktf/provider-aws'

redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktf/provider-aws'

redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktf/provider-aws'

redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftserverlessNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretArn">adminPasswordSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput">adminPasswordSecretKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">adminUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">defaultIamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">iamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">logExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput">manageAdminPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">adminUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">logExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword">manageAdminPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminPasswordSecretArn`<sup>Required</sup> <a name="adminPasswordSecretArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretArn"></a>

```typescript
public readonly adminPasswordSecretArn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `adminPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="adminPasswordSecretKmsKeyIdInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput"></a>

```typescript
public readonly adminPasswordSecretKmsKeyIdInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `adminUserPasswordInput`<sup>Optional</sup> <a name="adminUserPasswordInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```typescript
public readonly adminUserPasswordInput: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `defaultIamRoleArnInput`<sup>Optional</sup> <a name="defaultIamRoleArnInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```typescript
public readonly defaultIamRoleArnInput: string;
```

- *Type:* string

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logExportsInput`<sup>Optional</sup> <a name="logExportsInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```typescript
public readonly logExportsInput: string[];
```

- *Type:* string[]

---

##### `manageAdminPasswordInput`<sup>Optional</sup> <a name="manageAdminPasswordInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput"></a>

```typescript
public readonly manageAdminPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `adminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```typescript
public readonly adminPasswordSecretKmsKeyId: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```typescript
public readonly adminUserPassword: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

---

##### `manageAdminPassword`<sup>Required</sup> <a name="manageAdminPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword"></a>

```typescript
public readonly manageAdminPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktf/provider-aws'

const redshiftserverlessNamespaceConfig: redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">adminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">adminUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">logExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword">manageAdminPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}.

---

##### `adminPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId"></a>

```typescript
public readonly adminPasswordSecretKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}.

---

##### `adminUserPassword`<sup>Optional</sup> <a name="adminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```typescript
public readonly adminUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}.

---

##### `defaultIamRoleArn`<sup>Optional</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}.

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}.

---

##### `manageAdminPassword`<sup>Optional</sup> <a name="manageAdminPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword"></a>

```typescript
public readonly manageAdminPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}.

---



