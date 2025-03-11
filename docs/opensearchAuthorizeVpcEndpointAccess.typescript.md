# `opensearchAuthorizeVpcEndpointAccess` Submodule <a name="`opensearchAuthorizeVpcEndpointAccess` Submodule" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchAuthorizeVpcEndpointAccess <a name="OpensearchAuthorizeVpcEndpointAccess" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/opensearch_authorize_vpc_endpoint_access aws_opensearch_authorize_vpc_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

new opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess(scope: Construct, id: string, config: OpensearchAuthorizeVpcEndpointAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig">OpensearchAuthorizeVpcEndpointAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig">OpensearchAuthorizeVpcEndpointAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchAuthorizeVpcEndpointAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchAuthorizeVpcEndpointAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/opensearch_authorize_vpc_endpoint_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchAuthorizeVpcEndpointAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal">authorizedPrincipal</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizedPrincipal`<sup>Required</sup> <a name="authorizedPrincipal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal"></a>

```typescript
public readonly authorizedPrincipal: OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a>

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal.Initializer"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

const opensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal: opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal = { ... }
```


### OpensearchAuthorizeVpcEndpointAccessConfig <a name="OpensearchAuthorizeVpcEndpointAccessConfig" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.Initializer"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

const opensearchAuthorizeVpcEndpointAccessConfig: opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account">account</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

new opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get"></a>

```typescript
public get(index: number): OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer"></a>

```typescript
import { opensearchAuthorizeVpcEndpointAccess } from '@cdktf/provider-aws'

new opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a>

---



