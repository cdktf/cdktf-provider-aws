# `glueSchema` Submodule <a name="`glueSchema` Submodule" id="@cdktf/provider-aws.glueSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSchema <a name="GlueSchema" id="@cdktf/provider-aws.glueSchema.GlueSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema aws_glue_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSchema.GlueSchema.Initializer"></a>

```typescript
import { glueSchema } from '@cdktf/provider-aws'

new glueSchema.GlueSchema(scope: Construct, id: string, config: GlueSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig">GlueSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueSchema.GlueSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSchema.GlueSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueSchema.GlueSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig">GlueSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.resetRegistryArn">resetRegistryArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueSchema.GlueSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueSchema.GlueSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueSchema.GlueSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueSchema.GlueSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueSchema.GlueSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueSchema.GlueSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueSchema.GlueSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.glueSchema.GlueSchema.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueSchema.GlueSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueSchema.GlueSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.glueSchema.GlueSchema.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glueSchema.GlueSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.glueSchema.GlueSchema.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.glueSchema.GlueSchema.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSchema.GlueSchema.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueSchema.GlueSchema.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueSchema.GlueSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.glueSchema.GlueSchema.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSchema.GlueSchema.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.glueSchema.GlueSchema.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glueSchema.GlueSchema.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.glueSchema.GlueSchema.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.glueSchema.GlueSchema.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSchema.GlueSchema.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueSchema.GlueSchema.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueSchema.GlueSchema.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.glueSchema.GlueSchema.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRegistryArn` <a name="resetRegistryArn" id="@cdktf/provider-aws.glueSchema.GlueSchema.resetRegistryArn"></a>

```typescript
public resetRegistryArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.glueSchema.GlueSchema.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.glueSchema.GlueSchema.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlueSchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueSchema.GlueSchema.isConstruct"></a>

```typescript
import { glueSchema } from '@cdktf/provider-aws'

glueSchema.GlueSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSchema.GlueSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueSchema.GlueSchema.isTerraformElement"></a>

```typescript
import { glueSchema } from '@cdktf/provider-aws'

glueSchema.GlueSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSchema.GlueSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueSchema.GlueSchema.isTerraformResource"></a>

```typescript
import { glueSchema } from '@cdktf/provider-aws'

glueSchema.GlueSchema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSchema.GlueSchema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.glueSchema.GlueSchema.generateConfigForImport"></a>

```typescript
import { glueSchema } from '@cdktf/provider-aws'

glueSchema.GlueSchema.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlueSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueSchema.GlueSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.glueSchema.GlueSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.glueSchema.GlueSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueSchema.GlueSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlueSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.latestSchemaVersion">latestSchemaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.nextSchemaVersion">nextSchemaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaCheckpoint">schemaCheckpoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.compatibilityInput">compatibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.registryArnInput">registryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.compatibility">compatibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.registryArn">registryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `latestSchemaVersion`<sup>Required</sup> <a name="latestSchemaVersion" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.latestSchemaVersion"></a>

```typescript
public readonly latestSchemaVersion: number;
```

- *Type:* number

---

##### `nextSchemaVersion`<sup>Required</sup> <a name="nextSchemaVersion" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.nextSchemaVersion"></a>

```typescript
public readonly nextSchemaVersion: number;
```

- *Type:* number

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `schemaCheckpoint`<sup>Required</sup> <a name="schemaCheckpoint" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaCheckpoint"></a>

```typescript
public readonly schemaCheckpoint: number;
```

- *Type:* number

---

##### `compatibilityInput`<sup>Optional</sup> <a name="compatibilityInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.compatibilityInput"></a>

```typescript
public readonly compatibilityInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `registryArnInput`<sup>Optional</sup> <a name="registryArnInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.registryArnInput"></a>

```typescript
public readonly registryArnInput: string;
```

- *Type:* string

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaDefinitionInput"></a>

```typescript
public readonly schemaDefinitionInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.compatibility"></a>

```typescript
public readonly compatibility: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueSchema.GlueSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSchemaConfig <a name="GlueSchemaConfig" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.Initializer"></a>

```typescript
import { glueSchema } from '@cdktf/provider-aws'

const glueSchemaConfig: glueSchema.GlueSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.compatibility">compatibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#compatibility GlueSchema#compatibility}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#data_format GlueSchema#data_format}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#schema_definition GlueSchema#schema_definition}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#schema_name GlueSchema#schema_name}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#description GlueSchema#description}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#id GlueSchema#id}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.registryArn">registryArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#registry_arn GlueSchema#registry_arn}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#tags GlueSchema#tags}. |
| <code><a href="#@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#tags_all GlueSchema#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.compatibility"></a>

```typescript
public readonly compatibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#compatibility GlueSchema#compatibility}.

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#data_format GlueSchema#data_format}.

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#schema_definition GlueSchema#schema_definition}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#schema_name GlueSchema#schema_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#description GlueSchema#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#id GlueSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#region GlueSchema#region}

---

##### `registryArn`<sup>Optional</sup> <a name="registryArn" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#registry_arn GlueSchema#registry_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#tags GlueSchema#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.glueSchema.GlueSchemaConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_schema#tags_all GlueSchema#tags_all}.

---



