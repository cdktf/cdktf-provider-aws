# `aws_cleanrooms_collaboration`

Refer to the Terraform Registory for docs: [`aws_cleanrooms_collaboration`](https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration).

# `cleanroomsCollaboration` Submodule <a name="`cleanroomsCollaboration` Submodule" id="@cdktf/provider-aws.cleanroomsCollaboration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsCollaboration <a name="CleanroomsCollaboration" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration aws_cleanrooms_collaboration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

new cleanroomsCollaboration.CleanroomsCollaboration(scope: Construct, id: string, config: CleanroomsCollaborationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig">CleanroomsCollaborationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig">CleanroomsCollaborationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata">putDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember">putMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata">resetDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetMember">resetMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDataEncryptionMetadata` <a name="putDataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata"></a>

```typescript
public putDataEncryptionMetadata(value: CleanroomsCollaborationDataEncryptionMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `putMember` <a name="putMember" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember"></a>

```typescript
public putMember(value: IResolvable | CleanroomsCollaborationMember[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putMember.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts"></a>

```typescript
public putTimeouts(value: CleanroomsCollaborationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

---

##### `resetDataEncryptionMetadata` <a name="resetDataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata"></a>

```typescript
public resetDataEncryptionMetadata(): void
```

##### `resetMember` <a name="resetMember" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetMember"></a>

```typescript
public resetMember(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CleanroomsCollaboration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

cleanroomsCollaboration.CleanroomsCollaboration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CleanroomsCollaboration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsCollaboration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsCollaboration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CleanroomsCollaboration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata">dataEncryptionMetadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.member">member</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList">CleanroomsCollaborationMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference">CleanroomsCollaborationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput">creatorDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput">creatorMemberAbilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput">dataEncryptionMetadataInput</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.memberInput">memberInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput">queryLogStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName">creatorDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities">creatorMemberAbilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataEncryptionMetadata`<sup>Required</sup> <a name="dataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata"></a>

```typescript
public readonly dataEncryptionMetadata: CleanroomsCollaborationDataEncryptionMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.member"></a>

```typescript
public readonly member: CleanroomsCollaborationMemberList;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList">CleanroomsCollaborationMemberList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeouts"></a>

```typescript
public readonly timeouts: CleanroomsCollaborationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference">CleanroomsCollaborationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `creatorDisplayNameInput`<sup>Optional</sup> <a name="creatorDisplayNameInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput"></a>

```typescript
public readonly creatorDisplayNameInput: string;
```

- *Type:* string

---

##### `creatorMemberAbilitiesInput`<sup>Optional</sup> <a name="creatorMemberAbilitiesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput"></a>

```typescript
public readonly creatorMemberAbilitiesInput: string[];
```

- *Type:* string[]

---

##### `dataEncryptionMetadataInput`<sup>Optional</sup> <a name="dataEncryptionMetadataInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput"></a>

```typescript
public readonly dataEncryptionMetadataInput: CleanroomsCollaborationDataEncryptionMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.memberInput"></a>

```typescript
public readonly memberInput: IResolvable | CleanroomsCollaborationMember[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryLogStatusInput`<sup>Optional</sup> <a name="queryLogStatusInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput"></a>

```typescript
public readonly queryLogStatusInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CleanroomsCollaborationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

---

##### `creatorDisplayName`<sup>Required</sup> <a name="creatorDisplayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName"></a>

```typescript
public readonly creatorDisplayName: string;
```

- *Type:* string

---

##### `creatorMemberAbilities`<sup>Required</sup> <a name="creatorMemberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities"></a>

```typescript
public readonly creatorMemberAbilities: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsCollaborationConfig <a name="CleanroomsCollaborationConfig" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

const cleanroomsCollaborationConfig: cleanroomsCollaboration.CleanroomsCollaborationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName">creatorDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities">creatorMemberAbilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata">dataEncryptionMetadata</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | data_encryption_metadata block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.member">member</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>[]</code> | member block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creatorDisplayName`<sup>Required</sup> <a name="creatorDisplayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName"></a>

```typescript
public readonly creatorDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `creatorMemberAbilities`<sup>Required</sup> <a name="creatorMemberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities"></a>

```typescript
public readonly creatorMemberAbilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `dataEncryptionMetadata`<sup>Optional</sup> <a name="dataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata"></a>

```typescript
public readonly dataEncryptionMetadata: CleanroomsCollaborationDataEncryptionMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

data_encryption_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.member"></a>

```typescript
public readonly member: IResolvable | CleanroomsCollaborationMember[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>[]

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#member CleanroomsCollaboration#member}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CleanroomsCollaborationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#timeouts CleanroomsCollaboration#timeouts}

---

### CleanroomsCollaborationDataEncryptionMetadata <a name="CleanroomsCollaborationDataEncryptionMetadata" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

const cleanroomsCollaborationDataEncryptionMetadata: cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowClearText">allowClearText</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates">allowDuplicates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames">allowJoinsOnColumnsWithDifferentNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls">preserveNulls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}. |

---

##### `allowClearText`<sup>Required</sup> <a name="allowClearText" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowClearText"></a>

```typescript
public readonly allowClearText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}.

---

##### `allowDuplicates`<sup>Required</sup> <a name="allowDuplicates" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates"></a>

```typescript
public readonly allowDuplicates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

##### `allowJoinsOnColumnsWithDifferentNames`<sup>Required</sup> <a name="allowJoinsOnColumnsWithDifferentNames" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames"></a>

```typescript
public readonly allowJoinsOnColumnsWithDifferentNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

##### `preserveNulls`<sup>Required</sup> <a name="preserveNulls" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls"></a>

```typescript
public readonly preserveNulls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

### CleanroomsCollaborationMember <a name="CleanroomsCollaborationMember" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

const cleanroomsCollaborationMember: cleanroomsCollaboration.CleanroomsCollaborationMember = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.memberAbilities">memberAbilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}.

---

##### `memberAbilities`<sup>Required</sup> <a name="memberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember.property.memberAbilities"></a>

```typescript
public readonly memberAbilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}.

---

### CleanroomsCollaborationTimeouts <a name="CleanroomsCollaborationTimeouts" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

const cleanroomsCollaborationTimeouts: cleanroomsCollaboration.CleanroomsCollaborationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsCollaborationDataEncryptionMetadataOutputReference <a name="CleanroomsCollaborationDataEncryptionMetadataOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

new cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearTextInput">allowClearTextInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput">allowDuplicatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput">allowJoinsOnColumnsWithDifferentNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput">preserveNullsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearText">allowClearText</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates">allowDuplicates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames">allowJoinsOnColumnsWithDifferentNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls">preserveNulls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowClearTextInput`<sup>Optional</sup> <a name="allowClearTextInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearTextInput"></a>

```typescript
public readonly allowClearTextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowDuplicatesInput`<sup>Optional</sup> <a name="allowDuplicatesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput"></a>

```typescript
public readonly allowDuplicatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowJoinsOnColumnsWithDifferentNamesInput`<sup>Optional</sup> <a name="allowJoinsOnColumnsWithDifferentNamesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput"></a>

```typescript
public readonly allowJoinsOnColumnsWithDifferentNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preserveNullsInput`<sup>Optional</sup> <a name="preserveNullsInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput"></a>

```typescript
public readonly preserveNullsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClearText`<sup>Required</sup> <a name="allowClearText" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowClearText"></a>

```typescript
public readonly allowClearText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowDuplicates`<sup>Required</sup> <a name="allowDuplicates" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates"></a>

```typescript
public readonly allowDuplicates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowJoinsOnColumnsWithDifferentNames`<sup>Required</sup> <a name="allowJoinsOnColumnsWithDifferentNames" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames"></a>

```typescript
public readonly allowJoinsOnColumnsWithDifferentNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preserveNulls`<sup>Required</sup> <a name="preserveNulls" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls"></a>

```typescript
public readonly preserveNulls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CleanroomsCollaborationDataEncryptionMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---


### CleanroomsCollaborationMemberList <a name="CleanroomsCollaborationMemberList" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

new cleanroomsCollaboration.CleanroomsCollaborationMemberList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get"></a>

```typescript
public get(index: number): CleanroomsCollaborationMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMember[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>[]

---


### CleanroomsCollaborationMemberOutputReference <a name="CleanroomsCollaborationMemberOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

new cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilitiesInput">memberAbilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilities">memberAbilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `memberAbilitiesInput`<sup>Optional</sup> <a name="memberAbilitiesInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilitiesInput"></a>

```typescript
public readonly memberAbilitiesInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `memberAbilities`<sup>Required</sup> <a name="memberAbilities" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.memberAbilities"></a>

```typescript
public readonly memberAbilities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMemberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationMember;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationMember">CleanroomsCollaborationMember</a>

---


### CleanroomsCollaborationTimeoutsOutputReference <a name="CleanroomsCollaborationTimeoutsOutputReference" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer"></a>

```typescript
import { cleanroomsCollaboration } from '@cdktf/provider-aws'

new cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsCollaborationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsCollaboration.CleanroomsCollaborationTimeouts">CleanroomsCollaborationTimeouts</a>

---



