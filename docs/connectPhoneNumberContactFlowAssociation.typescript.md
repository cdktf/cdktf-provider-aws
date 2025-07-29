# `connectPhoneNumberContactFlowAssociation` Submodule <a name="`connectPhoneNumberContactFlowAssociation` Submodule" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPhoneNumberContactFlowAssociation <a name="ConnectPhoneNumberContactFlowAssociation" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association aws_connect_phone_number_contact_flow_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer"></a>

```typescript
import { connectPhoneNumberContactFlowAssociation } from '@cdktf/provider-aws'

new connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation(scope: Construct, id: string, config: ConnectPhoneNumberContactFlowAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig">ConnectPhoneNumberContactFlowAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig">ConnectPhoneNumberContactFlowAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConnectPhoneNumberContactFlowAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct"></a>

```typescript
import { connectPhoneNumberContactFlowAssociation } from '@cdktf/provider-aws'

connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement"></a>

```typescript
import { connectPhoneNumberContactFlowAssociation } from '@cdktf/provider-aws'

connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource"></a>

```typescript
import { connectPhoneNumberContactFlowAssociation } from '@cdktf/provider-aws'

connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport"></a>

```typescript
import { connectPhoneNumberContactFlowAssociation } from '@cdktf/provider-aws'

connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConnectPhoneNumberContactFlowAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectPhoneNumberContactFlowAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectPhoneNumberContactFlowAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConnectPhoneNumberContactFlowAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowIdInput">contactFlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberIdInput">phoneNumberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactFlowIdInput`<sup>Optional</sup> <a name="contactFlowIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowIdInput"></a>

```typescript
public readonly contactFlowIdInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `phoneNumberIdInput`<sup>Optional</sup> <a name="phoneNumberIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberIdInput"></a>

```typescript
public readonly phoneNumberIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPhoneNumberContactFlowAssociationConfig <a name="ConnectPhoneNumberContactFlowAssociationConfig" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.Initializer"></a>

```typescript
import { connectPhoneNumberContactFlowAssociation } from '@cdktf/provider-aws'

const connectPhoneNumberContactFlowAssociationConfig: connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}.

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/connect_phone_number_contact_flow_association#region ConnectPhoneNumberContactFlowAssociation#region}

---



