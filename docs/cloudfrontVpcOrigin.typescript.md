# `cloudfrontVpcOrigin` Submodule <a name="`cloudfrontVpcOrigin` Submodule" id="@cdktf/provider-aws.cloudfrontVpcOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontVpcOrigin <a name="CloudfrontVpcOrigin" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin aws_cloudfront_vpc_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

new cloudfrontVpcOrigin.CloudfrontVpcOrigin(scope: Construct, id: string, config?: CloudfrontVpcOriginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig">CloudfrontVpcOriginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig">CloudfrontVpcOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig">putVpcOriginEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetVpcOriginEndpointConfig">resetVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudfrontVpcOriginTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

---

##### `putVpcOriginEndpointConfig` <a name="putVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig"></a>

```typescript
public putVpcOriginEndpointConfig(value: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcOriginEndpointConfig` <a name="resetVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetVpcOriginEndpointConfig"></a>

```typescript
public resetVpcOriginEndpointConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontVpcOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontVpcOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontVpcOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference">CloudfrontVpcOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig">vpcOriginEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList">CloudfrontVpcOriginVpcOriginEndpointConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput">vpcOriginEndpointConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeouts"></a>

```typescript
public readonly timeouts: CloudfrontVpcOriginTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference">CloudfrontVpcOriginTimeoutsOutputReference</a>

---

##### `vpcOriginEndpointConfig`<sup>Required</sup> <a name="vpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig"></a>

```typescript
public readonly vpcOriginEndpointConfig: CloudfrontVpcOriginVpcOriginEndpointConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList">CloudfrontVpcOriginVpcOriginEndpointConfigList</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudfrontVpcOriginTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

---

##### `vpcOriginEndpointConfigInput`<sup>Optional</sup> <a name="vpcOriginEndpointConfigInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput"></a>

```typescript
public readonly vpcOriginEndpointConfigInput: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontVpcOriginConfig <a name="CloudfrontVpcOriginConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

const cloudfrontVpcOriginConfig: cloudfrontVpcOrigin.CloudfrontVpcOriginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig">vpcOriginEndpointConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>[]</code> | vpc_origin_endpoint_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudfrontVpcOriginTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#timeouts CloudfrontVpcOrigin#timeouts}

---

##### `vpcOriginEndpointConfig`<sup>Optional</sup> <a name="vpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig"></a>

```typescript
public readonly vpcOriginEndpointConfig: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>[]

vpc_origin_endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CloudfrontVpcOrigin#vpc_origin_endpoint_config}

---

### CloudfrontVpcOriginTimeouts <a name="CloudfrontVpcOriginTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

const cloudfrontVpcOriginTimeouts: cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#create CloudfrontVpcOrigin#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#delete CloudfrontVpcOrigin#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#update CloudfrontVpcOrigin#update}

---

### CloudfrontVpcOriginVpcOriginEndpointConfig <a name="CloudfrontVpcOriginVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

const cloudfrontVpcOriginVpcOriginEndpointConfig: cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort">httpPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort">httpsPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy">originProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols">originSslProtocols</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>[]</code> | origin_ssl_protocols block. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}.

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}.

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}.

---

##### `originProtocolPolicy`<sup>Required</sup> <a name="originProtocolPolicy" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy"></a>

```typescript
public readonly originProtocolPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}.

---

##### `originSslProtocols`<sup>Optional</sup> <a name="originSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols"></a>

```typescript
public readonly originSslProtocols: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>[]

origin_ssl_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CloudfrontVpcOrigin#origin_ssl_protocols}

---

### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

const cloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols: cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.items">items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.quantity">quantity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}. |

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}.

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.quantity"></a>

```typescript
public readonly quantity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontVpcOriginTimeoutsOutputReference <a name="CloudfrontVpcOriginTimeoutsOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

new cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontVpcOriginTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

---


### CloudfrontVpcOriginVpcOriginEndpointConfigList <a name="CloudfrontVpcOriginVpcOriginEndpointConfigList" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

new cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get"></a>

```typescript
public get(index: number): CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>[]

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

new cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get"></a>

```typescript
public get(index: number): CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>[]

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

new cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.itemsInput">itemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantityInput">quantityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantity">quantity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: string[];
```

- *Type:* string[]

---

##### `quantityInput`<sup>Optional</sup> <a name="quantityInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantityInput"></a>

```typescript
public readonly quantityInput: number;
```

- *Type:* number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantity"></a>

```typescript
public readonly quantity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontVpcOrigin } from '@cdktf/provider-aws'

new cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols">putOriginSslProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols">resetOriginSslProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOriginSslProtocols` <a name="putOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols"></a>

```typescript
public putOriginSslProtocols(value: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>[]

---

##### `resetOriginSslProtocols` <a name="resetOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols"></a>

```typescript
public resetOriginSslProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols">originSslProtocols</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput">httpPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput">httpsPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput">originProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput">originSslProtocolsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy">originProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originSslProtocols`<sup>Required</sup> <a name="originSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols"></a>

```typescript
public readonly originSslProtocols: CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput"></a>

```typescript
public readonly httpPortInput: number;
```

- *Type:* number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput"></a>

```typescript
public readonly httpsPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `originProtocolPolicyInput`<sup>Optional</sup> <a name="originProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput"></a>

```typescript
public readonly originProtocolPolicyInput: string;
```

- *Type:* string

---

##### `originSslProtocolsInput`<sup>Optional</sup> <a name="originSslProtocolsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput"></a>

```typescript
public readonly originSslProtocolsInput: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `originProtocolPolicy`<sup>Required</sup> <a name="originProtocolPolicy" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy"></a>

```typescript
public readonly originProtocolPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontVpcOriginVpcOriginEndpointConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig">CloudfrontVpcOriginVpcOriginEndpointConfig</a>

---



