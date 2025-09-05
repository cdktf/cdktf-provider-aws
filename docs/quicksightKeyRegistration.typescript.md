# `quicksightKeyRegistration` Submodule <a name="`quicksightKeyRegistration` Submodule" id="@cdktf/provider-aws.quicksightKeyRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightKeyRegistration <a name="QuicksightKeyRegistration" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration aws_quicksight_key_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

new quicksightKeyRegistration.QuicksightKeyRegistration(scope: Construct, id: string, config?: QuicksightKeyRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig">QuicksightKeyRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig">QuicksightKeyRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.putKeyRegistration">putKeyRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetKeyRegistration">resetKeyRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyRegistration` <a name="putKeyRegistration" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.putKeyRegistration"></a>

```typescript
public putKeyRegistration(value: IResolvable | QuicksightKeyRegistrationKeyRegistration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.putKeyRegistration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetKeyRegistration` <a name="resetKeyRegistration" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetKeyRegistration"></a>

```typescript
public resetKeyRegistration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightKeyRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isConstruct"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

quicksightKeyRegistration.QuicksightKeyRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformElement"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformResource"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuicksightKeyRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightKeyRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightKeyRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightKeyRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistration">keyRegistration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList">QuicksightKeyRegistrationKeyRegistrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistrationInput">keyRegistrationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyRegistration`<sup>Required</sup> <a name="keyRegistration" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistration"></a>

```typescript
public readonly keyRegistration: QuicksightKeyRegistrationKeyRegistrationList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList">QuicksightKeyRegistrationKeyRegistrationList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `keyRegistrationInput`<sup>Optional</sup> <a name="keyRegistrationInput" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.keyRegistrationInput"></a>

```typescript
public readonly keyRegistrationInput: IResolvable | QuicksightKeyRegistrationKeyRegistration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightKeyRegistrationConfig <a name="QuicksightKeyRegistrationConfig" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.Initializer"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

const quicksightKeyRegistrationConfig: quicksightKeyRegistration.QuicksightKeyRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#aws_account_id QuicksightKeyRegistration#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.keyRegistration">keyRegistration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]</code> | key_registration block. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#aws_account_id QuicksightKeyRegistration#aws_account_id}.

---

##### `keyRegistration`<sup>Optional</sup> <a name="keyRegistration" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.keyRegistration"></a>

```typescript
public readonly keyRegistration: IResolvable | QuicksightKeyRegistrationKeyRegistration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

key_registration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#key_registration QuicksightKeyRegistration#key_registration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#region QuicksightKeyRegistration#region}

---

### QuicksightKeyRegistrationKeyRegistration <a name="QuicksightKeyRegistrationKeyRegistration" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.Initializer"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

const quicksightKeyRegistrationKeyRegistration: quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.keyArn">keyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#key_arn QuicksightKeyRegistration#key_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.defaultKey">defaultKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#default_key QuicksightKeyRegistration#default_key}. |

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#key_arn QuicksightKeyRegistration#key_arn}.

---

##### `defaultKey`<sup>Optional</sup> <a name="defaultKey" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration.property.defaultKey"></a>

```typescript
public readonly defaultKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/quicksight_key_registration#default_key QuicksightKeyRegistration#default_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightKeyRegistrationKeyRegistrationList <a name="QuicksightKeyRegistrationKeyRegistrationList" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

new quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.get"></a>

```typescript
public get(index: number): QuicksightKeyRegistrationKeyRegistrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKeyRegistrationKeyRegistration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>[]

---


### QuicksightKeyRegistrationKeyRegistrationOutputReference <a name="QuicksightKeyRegistrationKeyRegistrationOutputReference" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer"></a>

```typescript
import { quicksightKeyRegistration } from '@cdktf/provider-aws'

new quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resetDefaultKey">resetDefaultKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultKey` <a name="resetDefaultKey" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.resetDefaultKey"></a>

```typescript
public resetDefaultKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKeyInput">defaultKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKey">defaultKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultKeyInput`<sup>Optional</sup> <a name="defaultKeyInput" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKeyInput"></a>

```typescript
public readonly defaultKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `defaultKey`<sup>Required</sup> <a name="defaultKey" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.defaultKey"></a>

```typescript
public readonly defaultKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKeyRegistrationKeyRegistration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightKeyRegistration.QuicksightKeyRegistrationKeyRegistration">QuicksightKeyRegistrationKeyRegistration</a>

---



