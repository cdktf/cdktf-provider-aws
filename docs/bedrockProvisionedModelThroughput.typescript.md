# `bedrockProvisionedModelThroughput` Submodule <a name="`bedrockProvisionedModelThroughput` Submodule" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockProvisionedModelThroughput <a name="BedrockProvisionedModelThroughput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

new bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput(scope: Construct, id: string, config: BedrockProvisionedModelThroughputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig">BedrockProvisionedModelThroughputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig">BedrockProvisionedModelThroughputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration">resetCommitmentDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockProvisionedModelThroughputTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---

##### `resetCommitmentDuration` <a name="resetCommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration"></a>

```typescript
public resetCommitmentDuration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockProvisionedModelThroughput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockProvisionedModelThroughput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockProvisionedModelThroughput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn">provisionedModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput">commitmentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput">modelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput">modelUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput">provisionedModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration">commitmentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits">modelUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName">provisionedModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedModelArn`<sup>Required</sup> <a name="provisionedModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn"></a>

```typescript
public readonly provisionedModelArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockProvisionedModelThroughputTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a>

---

##### `commitmentDurationInput`<sup>Optional</sup> <a name="commitmentDurationInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput"></a>

```typescript
public readonly commitmentDurationInput: string;
```

- *Type:* string

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput"></a>

```typescript
public readonly modelArnInput: string;
```

- *Type:* string

---

##### `modelUnitsInput`<sup>Optional</sup> <a name="modelUnitsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput"></a>

```typescript
public readonly modelUnitsInput: number;
```

- *Type:* number

---

##### `provisionedModelNameInput`<sup>Optional</sup> <a name="provisionedModelNameInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput"></a>

```typescript
public readonly provisionedModelNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockProvisionedModelThroughputTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---

##### `commitmentDuration`<sup>Required</sup> <a name="commitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration"></a>

```typescript
public readonly commitmentDuration: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

##### `modelUnits`<sup>Required</sup> <a name="modelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits"></a>

```typescript
public readonly modelUnits: number;
```

- *Type:* number

---

##### `provisionedModelName`<sup>Required</sup> <a name="provisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName"></a>

```typescript
public readonly provisionedModelName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockProvisionedModelThroughputConfig <a name="BedrockProvisionedModelThroughputConfig" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.Initializer"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

const bedrockProvisionedModelThroughputConfig: bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn">modelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits">modelUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName">provisionedModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration">commitmentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}.

---

##### `modelUnits`<sup>Required</sup> <a name="modelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits"></a>

```typescript
public readonly modelUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}.

---

##### `provisionedModelName`<sup>Required</sup> <a name="provisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName"></a>

```typescript
public readonly provisionedModelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}.

---

##### `commitmentDuration`<sup>Optional</sup> <a name="commitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration"></a>

```typescript
public readonly commitmentDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockProvisionedModelThroughputTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}

---

### BedrockProvisionedModelThroughputTimeouts <a name="BedrockProvisionedModelThroughputTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.Initializer"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

const bedrockProvisionedModelThroughputTimeouts: bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockProvisionedModelThroughputTimeoutsOutputReference <a name="BedrockProvisionedModelThroughputTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockProvisionedModelThroughput } from '@cdktf/provider-aws'

new bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockProvisionedModelThroughputTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---



