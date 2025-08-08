# `apiGatewayDomainNameAccessAssociation` Submodule <a name="`apiGatewayDomainNameAccessAssociation` Submodule" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDomainNameAccessAssociation <a name="ApiGatewayDomainNameAccessAssociation" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association aws_api_gateway_domain_name_access_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer"></a>

```typescript
import { apiGatewayDomainNameAccessAssociation } from '@cdktf/provider-aws'

new apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation(scope: Construct, id: string, config: ApiGatewayDomainNameAccessAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig">ApiGatewayDomainNameAccessAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig">ApiGatewayDomainNameAccessAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct"></a>

```typescript
import { apiGatewayDomainNameAccessAssociation } from '@cdktf/provider-aws'

apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement"></a>

```typescript
import { apiGatewayDomainNameAccessAssociation } from '@cdktf/provider-aws'

apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource"></a>

```typescript
import { apiGatewayDomainNameAccessAssociation } from '@cdktf/provider-aws'

apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport"></a>

```typescript
import { apiGatewayDomainNameAccessAssociation } from '@cdktf/provider-aws'

apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayDomainNameAccessAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayDomainNameAccessAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayDomainNameAccessAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceInput">accessAssociationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput">accessAssociationSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArnInput">domainNameArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSource">accessAssociationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArn">domainNameArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `accessAssociationSourceInput`<sup>Optional</sup> <a name="accessAssociationSourceInput" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceInput"></a>

```typescript
public readonly accessAssociationSourceInput: string;
```

- *Type:* string

---

##### `accessAssociationSourceTypeInput`<sup>Optional</sup> <a name="accessAssociationSourceTypeInput" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput"></a>

```typescript
public readonly accessAssociationSourceTypeInput: string;
```

- *Type:* string

---

##### `domainNameArnInput`<sup>Optional</sup> <a name="domainNameArnInput" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArnInput"></a>

```typescript
public readonly domainNameArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSource"></a>

```typescript
public readonly accessAssociationSource: string;
```

- *Type:* string

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.accessAssociationSourceType"></a>

```typescript
public readonly accessAssociationSourceType: string;
```

- *Type:* string

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.domainNameArn"></a>

```typescript
public readonly domainNameArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDomainNameAccessAssociationConfig <a name="ApiGatewayDomainNameAccessAssociationConfig" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.Initializer"></a>

```typescript
import { apiGatewayDomainNameAccessAssociation } from '@cdktf/provider-aws'

const apiGatewayDomainNameAccessAssociationConfig: apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSource">accessAssociationSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.domainNameArn">domainNameArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSource"></a>

```typescript
public readonly accessAssociationSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}.

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType"></a>

```typescript
public readonly accessAssociationSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}.

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.domainNameArn"></a>

```typescript
public readonly domainNameArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#region ApiGatewayDomainNameAccessAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayDomainNameAccessAssociation.ApiGatewayDomainNameAccessAssociationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}.

---



