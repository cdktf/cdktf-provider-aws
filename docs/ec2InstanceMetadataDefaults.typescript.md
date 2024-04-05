# `ec2InstanceMetadataDefaults` Submodule <a name="`ec2InstanceMetadataDefaults` Submodule" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceMetadataDefaults <a name="Ec2InstanceMetadataDefaults" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults aws_ec2_instance_metadata_defaults}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer"></a>

```typescript
import { ec2InstanceMetadataDefaults } from '@cdktf/provider-aws'

new ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults(scope: Construct, id: string, config?: Ec2InstanceMetadataDefaultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig">Ec2InstanceMetadataDefaultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig">Ec2InstanceMetadataDefaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetHttpTokens"></a>

```typescript
public resetHttpTokens(): void
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.resetInstanceMetadataTags"></a>

```typescript
public resetInstanceMetadataTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2InstanceMetadataDefaults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isConstruct"></a>

```typescript
import { ec2InstanceMetadataDefaults } from '@cdktf/provider-aws'

ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformElement"></a>

```typescript
import { ec2InstanceMetadataDefaults } from '@cdktf/provider-aws'

ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformResource"></a>

```typescript
import { ec2InstanceMetadataDefaults } from '@cdktf/provider-aws'

ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport"></a>

```typescript
import { ec2InstanceMetadataDefaults } from '@cdktf/provider-aws'

ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2InstanceMetadataDefaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2InstanceMetadataDefaults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2InstanceMetadataDefaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2InstanceMetadataDefaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpointInput">httpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTagsInput"></a>

```typescript
public readonly instanceMetadataTagsInput: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceMetadataDefaultsConfig <a name="Ec2InstanceMetadataDefaultsConfig" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.Initializer"></a>

```typescript
import { ec2InstanceMetadataDefaults } from '@cdktf/provider-aws'

const ec2InstanceMetadataDefaultsConfig: ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#http_endpoint Ec2InstanceMetadataDefaults#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#http_put_response_hop_limit Ec2InstanceMetadataDefaults#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#http_tokens Ec2InstanceMetadataDefaults#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#instance_metadata_tags Ec2InstanceMetadataDefaults#instance_metadata_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#http_endpoint Ec2InstanceMetadataDefaults#http_endpoint}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#http_put_response_hop_limit Ec2InstanceMetadataDefaults#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#http_tokens Ec2InstanceMetadataDefaults#http_tokens}.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktf/provider-aws.ec2InstanceMetadataDefaults.Ec2InstanceMetadataDefaultsConfig.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/ec2_instance_metadata_defaults#instance_metadata_tags Ec2InstanceMetadataDefaults#instance_metadata_tags}.

---



