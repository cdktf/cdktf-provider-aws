# `ec2DefaultCreditSpecification` Submodule <a name="`ec2DefaultCreditSpecification` Submodule" id="@cdktf/provider-aws.ec2DefaultCreditSpecification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2DefaultCreditSpecification <a name="Ec2DefaultCreditSpecification" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification aws_ec2_default_credit_specification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

new ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification(scope: Construct, id: string, config: Ec2DefaultCreditSpecificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig">Ec2DefaultCreditSpecificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig">Ec2DefaultCreditSpecificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.putTimeouts"></a>

```typescript
public putTimeouts(value: Ec2DefaultCreditSpecificationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2DefaultCreditSpecification resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isConstruct"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformElement"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformResource"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2DefaultCreditSpecification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2DefaultCreditSpecification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2DefaultCreditSpecification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2DefaultCreditSpecification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference">Ec2DefaultCreditSpecificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamilyInput">instanceFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2DefaultCreditSpecificationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference">Ec2DefaultCreditSpecificationTimeoutsOutputReference</a>

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCreditsInput"></a>

```typescript
public readonly cpuCreditsInput: string;
```

- *Type:* string

---

##### `instanceFamilyInput`<sup>Optional</sup> <a name="instanceFamilyInput" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamilyInput"></a>

```typescript
public readonly instanceFamilyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Ec2DefaultCreditSpecificationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2DefaultCreditSpecificationConfig <a name="Ec2DefaultCreditSpecificationConfig" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.Initializer"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

const ec2DefaultCreditSpecificationConfig: ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#cpu_credits Ec2DefaultCreditSpecification#cpu_credits}. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#instance_family Ec2DefaultCreditSpecification#instance_family}. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#cpu_credits Ec2DefaultCreditSpecification#cpu_credits}.

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#instance_family Ec2DefaultCreditSpecification#instance_family}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2DefaultCreditSpecificationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#timeouts Ec2DefaultCreditSpecification#timeouts}

---

### Ec2DefaultCreditSpecificationTimeouts <a name="Ec2DefaultCreditSpecificationTimeouts" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.Initializer"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

const ec2DefaultCreditSpecificationTimeouts: ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#create Ec2DefaultCreditSpecification#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/ec2_default_credit_specification#update Ec2DefaultCreditSpecification#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2DefaultCreditSpecificationTimeoutsOutputReference <a name="Ec2DefaultCreditSpecificationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer"></a>

```typescript
import { ec2DefaultCreditSpecification } from '@cdktf/provider-aws'

new ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2DefaultCreditSpecificationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2DefaultCreditSpecification.Ec2DefaultCreditSpecificationTimeouts">Ec2DefaultCreditSpecificationTimeouts</a>

---



