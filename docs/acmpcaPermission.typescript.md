# `acmpcaPermission` Submodule <a name="`acmpcaPermission` Submodule" id="@cdktf/provider-aws.acmpcaPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaPermission <a name="AcmpcaPermission" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission aws_acmpca_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.Initializer"></a>

```typescript
import { acmpcaPermission } from '@cdktf/provider-aws'

new acmpcaPermission.AcmpcaPermission(scope: Construct, id: string, config: AcmpcaPermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig">AcmpcaPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig">AcmpcaPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetSourceAccount">resetSourceAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSourceAccount` <a name="resetSourceAccount" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.resetSourceAccount"></a>

```typescript
public resetSourceAccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AcmpcaPermission resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isConstruct"></a>

```typescript
import { acmpcaPermission } from '@cdktf/provider-aws'

acmpcaPermission.AcmpcaPermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isTerraformElement"></a>

```typescript
import { acmpcaPermission } from '@cdktf/provider-aws'

acmpcaPermission.AcmpcaPermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isTerraformResource"></a>

```typescript
import { acmpcaPermission } from '@cdktf/provider-aws'

acmpcaPermission.AcmpcaPermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.generateConfigForImport"></a>

```typescript
import { acmpcaPermission } from '@cdktf/provider-aws'

acmpcaPermission.AcmpcaPermission.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AcmpcaPermission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AcmpcaPermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AcmpcaPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AcmpcaPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.sourceAccountInput">sourceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceAccountInput`<sup>Optional</sup> <a name="sourceAccountInput" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.sourceAccountInput"></a>

```typescript
public readonly sourceAccountInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceAccount`<sup>Required</sup> <a name="sourceAccount" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaPermissionConfig <a name="AcmpcaPermissionConfig" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.Initializer"></a>

```typescript
import { acmpcaPermission } from '@cdktf/provider-aws'

const acmpcaPermissionConfig: acmpcaPermission.AcmpcaPermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#actions AcmpcaPermission#actions}. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#certificate_authority_arn AcmpcaPermission#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#principal AcmpcaPermission#principal}. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#id AcmpcaPermission#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#source_account AcmpcaPermission#source_account}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#actions AcmpcaPermission#actions}.

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#certificate_authority_arn AcmpcaPermission#certificate_authority_arn}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#principal AcmpcaPermission#principal}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#id AcmpcaPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#region AcmpcaPermission#region}

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="@cdktf/provider-aws.acmpcaPermission.AcmpcaPermissionConfig.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/acmpca_permission#source_account AcmpcaPermission#source_account}.

---



