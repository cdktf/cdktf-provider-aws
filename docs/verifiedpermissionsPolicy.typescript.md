# `verifiedpermissionsPolicy` Submodule <a name="`verifiedpermissionsPolicy` Submodule" id="@cdktf/provider-aws.verifiedpermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicy <a name="VerifiedpermissionsPolicy" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy aws_verifiedpermissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicy(scope: Construct, id: string, config: VerifiedpermissionsPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig">VerifiedpermissionsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig">VerifiedpermissionsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetDefinition">resetDefinition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition"></a>

```typescript
public putDefinition(value: IResolvable | VerifiedpermissionsPolicyDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.putDefinition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>[]

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedpermissionsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VerifiedpermissionsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedpermissionsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedpermissionsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList">VerifiedpermissionsPolicyDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definitionInput">definitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreIdInput">policyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definition"></a>

```typescript
public readonly definition: VerifiedpermissionsPolicyDefinitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList">VerifiedpermissionsPolicyDefinitionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.definitionInput"></a>

```typescript
public readonly definitionInput: IResolvable | VerifiedpermissionsPolicyDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>[]

---

##### `policyStoreIdInput`<sup>Optional</sup> <a name="policyStoreIdInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreIdInput"></a>

```typescript
public readonly policyStoreIdInput: string;
```

- *Type:* string

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyConfig <a name="VerifiedpermissionsPolicyConfig" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyConfig: verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.definition">definition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>[]</code> | definition block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#policy_store_id VerifiedpermissionsPolicy#policy_store_id}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyConfig.property.definition"></a>

```typescript
public readonly definition: IResolvable | VerifiedpermissionsPolicyDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>[]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#definition VerifiedpermissionsPolicy#definition}

---

### VerifiedpermissionsPolicyDefinition <a name="VerifiedpermissionsPolicyDefinition" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyDefinition: verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.static">static</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>[]</code> | static block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.templateLinked">templateLinked</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>[]</code> | template_linked block. |

---

##### `static`<sup>Optional</sup> <a name="static" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.static"></a>

```typescript
public readonly static: IResolvable | VerifiedpermissionsPolicyDefinitionStatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>[]

static block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#static VerifiedpermissionsPolicy#static}

---

##### `templateLinked`<sup>Optional</sup> <a name="templateLinked" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition.property.templateLinked"></a>

```typescript
public readonly templateLinked: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>[]

template_linked block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#template_linked VerifiedpermissionsPolicy#template_linked}

---

### VerifiedpermissionsPolicyDefinitionStatic <a name="VerifiedpermissionsPolicyDefinitionStatic" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyDefinitionStatic: verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.statement">statement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}. |

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#statement VerifiedpermissionsPolicy#statement}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#description VerifiedpermissionsPolicy#description}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinked <a name="VerifiedpermissionsPolicyDefinitionTemplateLinked" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyDefinitionTemplateLinked: verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.principal">principal</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.resource">resource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>[]</code> | resource block. |

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#policy_template_id VerifiedpermissionsPolicy#policy_template_id}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.principal"></a>

```typescript
public readonly principal: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#principal VerifiedpermissionsPolicy#principal}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked.property.resource"></a>

```typescript
public readonly resource: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>[]

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#resource VerifiedpermissionsPolicy#resource}

---

### VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal: verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

### VerifiedpermissionsPolicyDefinitionTemplateLinkedResource <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyDefinitionTemplateLinkedResource: verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_id VerifiedpermissionsPolicy#entity_id}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/verifiedpermissions_policy#entity_type VerifiedpermissionsPolicy#entity_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsPolicyDefinitionList <a name="VerifiedpermissionsPolicyDefinitionList" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.get"></a>

```typescript
public get(index: number): VerifiedpermissionsPolicyDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>[]

---


### VerifiedpermissionsPolicyDefinitionOutputReference <a name="VerifiedpermissionsPolicyDefinitionOutputReference" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic">putStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked">putTemplateLinked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetStatic">resetStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetTemplateLinked">resetTemplateLinked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatic` <a name="putStatic" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic"></a>

```typescript
public putStatic(value: IResolvable | VerifiedpermissionsPolicyDefinitionStatic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putStatic.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>[]

---

##### `putTemplateLinked` <a name="putTemplateLinked" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked"></a>

```typescript
public putTemplateLinked(value: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.putTemplateLinked.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>[]

---

##### `resetStatic` <a name="resetStatic" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetStatic"></a>

```typescript
public resetStatic(): void
```

##### `resetTemplateLinked` <a name="resetTemplateLinked" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.resetTemplateLinked"></a>

```typescript
public resetTemplateLinked(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.static">static</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList">VerifiedpermissionsPolicyDefinitionStaticList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked">templateLinked</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList">VerifiedpermissionsPolicyDefinitionTemplateLinkedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.staticInput">staticInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinkedInput">templateLinkedInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `static`<sup>Required</sup> <a name="static" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.static"></a>

```typescript
public readonly static: VerifiedpermissionsPolicyDefinitionStaticList;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList">VerifiedpermissionsPolicyDefinitionStaticList</a>

---

##### `templateLinked`<sup>Required</sup> <a name="templateLinked" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked"></a>

```typescript
public readonly templateLinked: VerifiedpermissionsPolicyDefinitionTemplateLinkedList;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList">VerifiedpermissionsPolicyDefinitionTemplateLinkedList</a>

---

##### `staticInput`<sup>Optional</sup> <a name="staticInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.staticInput"></a>

```typescript
public readonly staticInput: IResolvable | VerifiedpermissionsPolicyDefinitionStatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>[]

---

##### `templateLinkedInput`<sup>Optional</sup> <a name="templateLinkedInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinkedInput"></a>

```typescript
public readonly templateLinkedInput: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinition">VerifiedpermissionsPolicyDefinition</a>

---


### VerifiedpermissionsPolicyDefinitionStaticList <a name="VerifiedpermissionsPolicyDefinitionStaticList" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.get"></a>

```typescript
public get(index: number): VerifiedpermissionsPolicyDefinitionStaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionStatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>[]

---


### VerifiedpermissionsPolicyDefinitionStaticOutputReference <a name="VerifiedpermissionsPolicyDefinitionStaticOutputReference" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionStatic;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionStatic">VerifiedpermissionsPolicyDefinitionStatic</a>

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedList <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedList" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.get"></a>

```typescript
public get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>[]

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putPrincipal.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>[]

---

##### `putResource` <a name="putResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource"></a>

```typescript
public putResource(value: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.putResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>[]

---

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList">VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateIdInput">policyTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principalInput">principalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resourceInput">resourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId">policyTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal"></a>

```typescript
public readonly principal: VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource"></a>

```typescript
public readonly resource: VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList">VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList</a>

---

##### `policyTemplateIdInput`<sup>Optional</sup> <a name="policyTemplateIdInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateIdInput"></a>

```typescript
public readonly policyTemplateIdInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>[]

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>[]

---

##### `policyTemplateId`<sup>Required</sup> <a name="policyTemplateId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId"></a>

```typescript
public readonly policyTemplateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinked;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinked">VerifiedpermissionsPolicyDefinitionTemplateLinked</a>

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.get"></a>

```typescript
public get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>[]

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">VerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.get"></a>

```typescript
public get(index: number): VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>[]

---


### VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference <a name="VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer"></a>

```typescript
import { verifiedpermissionsPolicy } from '@cdktf/provider-aws'

new verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyDefinitionTemplateLinkedResource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicy.VerifiedpermissionsPolicyDefinitionTemplateLinkedResource">VerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

---



