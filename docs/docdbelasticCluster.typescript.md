# `docdbelasticCluster` Submodule <a name="`docdbelasticCluster` Submodule" id="@cdktf/provider-aws.docdbelasticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbelasticCluster <a name="DocdbelasticCluster" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster aws_docdbelastic_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

new docdbelasticCluster.DocdbelasticCluster(scope: Construct, id: string, config: DocdbelasticClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig">DocdbelasticClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig">DocdbelasticClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: DocdbelasticClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DocdbelasticCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isConstruct"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

docdbelasticCluster.DocdbelasticCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformElement"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

docdbelasticCluster.DocdbelasticCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformResource"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

docdbelasticCluster.DocdbelasticCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

docdbelasticCluster.DocdbelasticCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DocdbelasticCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbelasticCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbelasticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DocdbelasticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference">DocdbelasticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserNameInput">adminUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPasswordInput">adminUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacityInput">shardCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCountInput">shardCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserName">adminUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPassword">adminUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacity">shardCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCount">shardCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeouts"></a>

```typescript
public readonly timeouts: DocdbelasticClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference">DocdbelasticClusterTimeoutsOutputReference</a>

---

##### `adminUserNameInput`<sup>Optional</sup> <a name="adminUserNameInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserNameInput"></a>

```typescript
public readonly adminUserNameInput: string;
```

- *Type:* string

---

##### `adminUserPasswordInput`<sup>Optional</sup> <a name="adminUserPasswordInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPasswordInput"></a>

```typescript
public readonly adminUserPasswordInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `shardCapacityInput`<sup>Optional</sup> <a name="shardCapacityInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacityInput"></a>

```typescript
public readonly shardCapacityInput: number;
```

- *Type:* number

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCountInput"></a>

```typescript
public readonly shardCountInput: number;
```

- *Type:* number

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DocdbelasticClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserName"></a>

```typescript
public readonly adminUserName: string;
```

- *Type:* string

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.adminUserPassword"></a>

```typescript
public readonly adminUserPassword: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `shardCapacity`<sup>Required</sup> <a name="shardCapacity" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCapacity"></a>

```typescript
public readonly shardCapacity: number;
```

- *Type:* number

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbelasticClusterConfig <a name="DocdbelasticClusterConfig" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.Initializer"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

const docdbelasticClusterConfig: docdbelasticCluster.DocdbelasticClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserName">adminUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#admin_user_name DocdbelasticCluster#admin_user_name}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserPassword">adminUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#admin_user_password DocdbelasticCluster#admin_user_password}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#auth_type DocdbelasticCluster#auth_type}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#name DocdbelasticCluster#name}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCapacity">shardCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#shard_capacity DocdbelasticCluster#shard_capacity}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCount">shardCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#shard_count DocdbelasticCluster#shard_count}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#kms_key_id DocdbelasticCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#preferred_maintenance_window DocdbelasticCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#subnet_ids DocdbelasticCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#tags DocdbelasticCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#vpc_security_group_ids DocdbelasticCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserName"></a>

```typescript
public readonly adminUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#admin_user_name DocdbelasticCluster#admin_user_name}.

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.adminUserPassword"></a>

```typescript
public readonly adminUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#admin_user_password DocdbelasticCluster#admin_user_password}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#auth_type DocdbelasticCluster#auth_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#name DocdbelasticCluster#name}.

---

##### `shardCapacity`<sup>Required</sup> <a name="shardCapacity" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCapacity"></a>

```typescript
public readonly shardCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#shard_capacity DocdbelasticCluster#shard_capacity}.

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.shardCount"></a>

```typescript
public readonly shardCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#shard_count DocdbelasticCluster#shard_count}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#kms_key_id DocdbelasticCluster#kms_key_id}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#preferred_maintenance_window DocdbelasticCluster#preferred_maintenance_window}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#subnet_ids DocdbelasticCluster#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#tags DocdbelasticCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DocdbelasticClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#timeouts DocdbelasticCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#vpc_security_group_ids DocdbelasticCluster#vpc_security_group_ids}.

---

### DocdbelasticClusterTimeouts <a name="DocdbelasticClusterTimeouts" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.Initializer"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

const docdbelasticClusterTimeouts: docdbelasticCluster.DocdbelasticClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#create DocdbelasticCluster#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#delete DocdbelasticCluster#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/docdbelastic_cluster#update DocdbelasticCluster#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbelasticClusterTimeoutsOutputReference <a name="DocdbelasticClusterTimeoutsOutputReference" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { docdbelasticCluster } from '@cdktf/provider-aws'

new docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocdbelasticClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.docdbelasticCluster.DocdbelasticClusterTimeouts">DocdbelasticClusterTimeouts</a>

---



