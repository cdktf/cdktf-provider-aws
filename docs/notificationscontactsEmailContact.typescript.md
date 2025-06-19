# `notificationscontactsEmailContact` Submodule <a name="`notificationscontactsEmailContact` Submodule" id="@cdktf/provider-aws.notificationscontactsEmailContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationscontactsEmailContact <a name="NotificationscontactsEmailContact" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact aws_notificationscontacts_email_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktf/provider-aws'

new notificationscontactsEmailContact.NotificationscontactsEmailContact(scope: Construct, id: string, config: NotificationscontactsEmailContactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig">NotificationscontactsEmailContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig">NotificationscontactsEmailContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationscontactsEmailContact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktf/provider-aws'

notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktf/provider-aws'

notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktf/provider-aws'

notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktf/provider-aws'

notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationscontactsEmailContact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationscontactsEmailContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationscontactsEmailContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationscontactsEmailContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationscontactsEmailContactConfig <a name="NotificationscontactsEmailContactConfig" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktf/provider-aws'

const notificationscontactsEmailContactConfig: notificationscontactsEmailContact.NotificationscontactsEmailContactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}. |
| <code><a href="#@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact#tags NotificationscontactsEmailContact#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/notificationscontacts_email_contact#tags NotificationscontactsEmailContact#tags}.

---



