# `elasticsearchVpcEndpoint` Submodule <a name="`elasticsearchVpcEndpoint` Submodule" id="@cdktf/provider-aws.elasticsearchVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchVpcEndpoint <a name="ElasticsearchVpcEndpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint aws_elasticsearch_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

new elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint(scope: Construct, id: string, config: ElasticsearchVpcEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig">ElasticsearchVpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig">ElasticsearchVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticsearchVpcEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions"></a>

```typescript
public putVpcOptions(value: ElasticsearchVpcEndpointVpcOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticsearchVpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticsearchVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticsearchVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput">domainArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn">domainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticsearchVpcEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: ElasticsearchVpcEndpointVpcOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a>

---

##### `domainArnInput`<sup>Optional</sup> <a name="domainArnInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput"></a>

```typescript
public readonly domainArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ElasticsearchVpcEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput"></a>

```typescript
public readonly vpcOptionsInput: ElasticsearchVpcEndpointVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchVpcEndpointConfig <a name="ElasticsearchVpcEndpointConfig" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.Initializer"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

const elasticsearchVpcEndpointConfig: elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn">domainArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | vpc_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn"></a>

```typescript
public readonly domainArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}.

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: ElasticsearchVpcEndpointVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#vpc_options ElasticsearchVpcEndpoint#vpc_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticsearchVpcEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#timeouts ElasticsearchVpcEndpoint#timeouts}

---

### ElasticsearchVpcEndpointTimeouts <a name="ElasticsearchVpcEndpointTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.Initializer"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

const elasticsearchVpcEndpointTimeouts: elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}.

---

### ElasticsearchVpcEndpointVpcOptions <a name="ElasticsearchVpcEndpointVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.Initializer"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

const elasticsearchVpcEndpointVpcOptions: elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchVpcEndpointTimeoutsOutputReference <a name="ElasticsearchVpcEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

new elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticsearchVpcEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---


### ElasticsearchVpcEndpointVpcOptionsOutputReference <a name="ElasticsearchVpcEndpointVpcOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer"></a>

```typescript
import { elasticsearchVpcEndpoint } from '@cdktf/provider-aws'

new elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticsearchVpcEndpointVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---



