# `route53RecordsExclusive` Submodule <a name="`route53RecordsExclusive` Submodule" id="@cdktf/provider-aws.route53RecordsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordsExclusive <a name="Route53RecordsExclusive" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusive(scope: Construct, id: string, config: Route53RecordsExclusiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig">Route53RecordsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig">Route53RecordsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet">putResourceRecordSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet">resetResourceRecordSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceRecordSet` <a name="putResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet"></a>

```typescript
public putResourceRecordSet(value: IResolvable | Route53RecordsExclusiveResourceRecordSet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putResourceRecordSet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts"></a>

```typescript
public putTimeouts(value: Route53RecordsExclusiveTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

---

##### `resetResourceRecordSet` <a name="resetResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetResourceRecordSet"></a>

```typescript
public resetResourceRecordSet(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

route53RecordsExclusive.Route53RecordsExclusive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecordsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecordsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53RecordsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet">resourceRecordSet</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput">resourceRecordSetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceRecordSet`<sup>Required</sup> <a name="resourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSet"></a>

```typescript
public readonly resourceRecordSet: Route53RecordsExclusiveResourceRecordSetList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList">Route53RecordsExclusiveResourceRecordSetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecordsExclusiveTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference">Route53RecordsExclusiveTimeoutsOutputReference</a>

---

##### `resourceRecordSetInput`<sup>Optional</sup> <a name="resourceRecordSetInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.resourceRecordSetInput"></a>

```typescript
public readonly resourceRecordSetInput: IResolvable | Route53RecordsExclusiveResourceRecordSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Route53RecordsExclusiveTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordsExclusiveConfig <a name="Route53RecordsExclusiveConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveConfig: route53RecordsExclusive.Route53RecordsExclusiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet">resourceRecordSet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>[]</code> | resource_record_set block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}.

---

##### `resourceRecordSet`<sup>Optional</sup> <a name="resourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.resourceRecordSet"></a>

```typescript
public readonly resourceRecordSet: IResolvable | Route53RecordsExclusiveResourceRecordSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>[]

resource_record_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#resource_record_set Route53RecordsExclusive#resource_record_set}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Route53RecordsExclusiveTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#timeouts Route53RecordsExclusive#timeouts}

---

### Route53RecordsExclusiveResourceRecordSet <a name="Route53RecordsExclusiveResourceRecordSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveResourceRecordSet: route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget">aliasTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>[]</code> | alias_target block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>[]</code> | cidr_routing_config block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover">failover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation">geolocation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>[]</code> | geolocation block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation">geoproximityLocation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>[]</code> | geoproximity_location block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer">multiValueAnswer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords">resourceRecords</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>[]</code> | resource_records block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier">setIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId">trafficPolicyInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}.

---

##### `aliasTarget`<sup>Optional</sup> <a name="aliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.aliasTarget"></a>

```typescript
public readonly aliasTarget: IResolvable | Route53RecordsExclusiveResourceRecordSetAliasTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>[]

alias_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#alias_target Route53RecordsExclusive#alias_target}

---

##### `cidrRoutingConfig`<sup>Optional</sup> <a name="cidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.cidrRoutingConfig"></a>

```typescript
public readonly cidrRoutingConfig: IResolvable | Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>[]

cidr_routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#cidr_routing_config Route53RecordsExclusive#cidr_routing_config}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.failover"></a>

```typescript
public readonly failover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}.

---

##### `geolocation`<sup>Optional</sup> <a name="geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geolocation"></a>

```typescript
public readonly geolocation: IResolvable | Route53RecordsExclusiveResourceRecordSetGeolocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>[]

geolocation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#geolocation Route53RecordsExclusive#geolocation}

---

##### `geoproximityLocation`<sup>Optional</sup> <a name="geoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.geoproximityLocation"></a>

```typescript
public readonly geoproximityLocation: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>[]

geoproximity_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#geoproximity_location Route53RecordsExclusive#geoproximity_location}

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}.

---

##### `multiValueAnswer`<sup>Optional</sup> <a name="multiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.multiValueAnswer"></a>

```typescript
public readonly multiValueAnswer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}.

---

##### `resourceRecords`<sup>Optional</sup> <a name="resourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: IResolvable | Route53RecordsExclusiveResourceRecordSetResourceRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>[]

resource_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#resource_records Route53RecordsExclusive#resource_records}

---

##### `setIdentifier`<sup>Optional</sup> <a name="setIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.setIdentifier"></a>

```typescript
public readonly setIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}.

---

##### `trafficPolicyInstanceId`<sup>Optional</sup> <a name="trafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.trafficPolicyInstanceId"></a>

```typescript
public readonly trafficPolicyInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}.

---

### Route53RecordsExclusiveResourceRecordSetAliasTarget <a name="Route53RecordsExclusiveResourceRecordSetAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveResourceRecordSetAliasTarget: route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}. |

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}.

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.evaluateTargetHealth"></a>

```typescript
public readonly evaluateTargetHealth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}.

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}.

---

### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveResourceRecordSetCidrRoutingConfig: route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName">locationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}.

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}.

---

### Route53RecordsExclusiveResourceRecordSetGeolocation <a name="Route53RecordsExclusiveResourceRecordSetGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveResourceRecordSetGeolocation: route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode">continentCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode">subdivisionCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}. |

---

##### `continentCode`<sup>Optional</sup> <a name="continentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.continentCode"></a>

```typescript
public readonly continentCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}.

---

##### `subdivisionCode`<sup>Optional</sup> <a name="subdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation.property.subdivisionCode"></a>

```typescript
public readonly subdivisionCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocation <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveResourceRecordSetGeoproximityLocation: route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias">bias</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates">coordinates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>[]</code> | coordinates block. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup">localZoneGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}.

---

##### `bias`<sup>Optional</sup> <a name="bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.bias"></a>

```typescript
public readonly bias: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}.

---

##### `coordinates`<sup>Optional</sup> <a name="coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.coordinates"></a>

```typescript
public readonly coordinates: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>[]

coordinates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#coordinates Route53RecordsExclusive#coordinates}

---

##### `localZoneGroup`<sup>Optional</sup> <a name="localZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation.property.localZoneGroup"></a>

```typescript
public readonly localZoneGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}.

---

### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates: route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude">latitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude">longitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}. |

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}.

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}.

---

### Route53RecordsExclusiveResourceRecordSetResourceRecords <a name="Route53RecordsExclusiveResourceRecordSetResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveResourceRecordSetResourceRecords: route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}.

---

### Route53RecordsExclusiveTimeouts <a name="Route53RecordsExclusiveTimeouts" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

const route53RecordsExclusiveTimeouts: route53RecordsExclusive.Route53RecordsExclusiveTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#create Route53RecordsExclusive#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/route53_records_exclusive#update Route53RecordsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordsExclusiveResourceRecordSetAliasTargetList <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get"></a>

```typescript
public get(index: number): Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetAliasTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>[]

---


### Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">evaluateTargetHealthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `evaluateTargetHealthInput`<sup>Optional</sup> <a name="evaluateTargetHealthInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```typescript
public readonly evaluateTargetHealthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```typescript
public readonly evaluateTargetHealth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetAliasTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get"></a>

```typescript
public get(index: number): Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>[]

---


### Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference <a name="Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput">locationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName">locationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```typescript
public readonly locationNameInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>

---


### Route53RecordsExclusiveResourceRecordSetGeolocationList <a name="Route53RecordsExclusiveResourceRecordSetGeolocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get"></a>

```typescript
public get(index: number): Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetGeolocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>[]

---


### Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode">resetContinentCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode">resetSubdivisionCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinentCode` <a name="resetContinentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetContinentCode"></a>

```typescript
public resetContinentCode(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetSubdivisionCode` <a name="resetSubdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.resetSubdivisionCode"></a>

```typescript
public resetSubdivisionCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput">continentCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput">subdivisionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode">continentCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode">subdivisionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continentCodeInput`<sup>Optional</sup> <a name="continentCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCodeInput"></a>

```typescript
public readonly continentCodeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `subdivisionCodeInput`<sup>Optional</sup> <a name="subdivisionCodeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCodeInput"></a>

```typescript
public readonly subdivisionCodeInput: string;
```

- *Type:* string

---

##### `continentCode`<sup>Required</sup> <a name="continentCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.continentCode"></a>

```typescript
public readonly continentCode: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `subdivisionCode`<sup>Required</sup> <a name="subdivisionCode" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.subdivisionCode"></a>

```typescript
public readonly subdivisionCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetGeolocation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get"></a>

```typescript
public get(index: number): Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>[]

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput">latitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput">longitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitudeInput"></a>

```typescript
public readonly latitudeInput: string;
```

- *Type:* string

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitudeInput"></a>

```typescript
public readonly longitudeInput: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get"></a>

```typescript
public get(index: number): Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>[]

---


### Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference <a name="Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates">putCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias">resetBias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates">resetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup">resetLocalZoneGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoordinates` <a name="putCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates"></a>

```typescript
public putCoordinates(value: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.putCoordinates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>[]

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetBias` <a name="resetBias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetBias"></a>

```typescript
public resetBias(): void
```

##### `resetCoordinates` <a name="resetCoordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetCoordinates"></a>

```typescript
public resetCoordinates(): void
```

##### `resetLocalZoneGroup` <a name="resetLocalZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.resetLocalZoneGroup"></a>

```typescript
public resetLocalZoneGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput">biasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput">localZoneGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias">bias</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup">localZoneGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinates"></a>

```typescript
public readonly coordinates: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `biasInput`<sup>Optional</sup> <a name="biasInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.biasInput"></a>

```typescript
public readonly biasInput: number;
```

- *Type:* number

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.coordinatesInput"></a>

```typescript
public readonly coordinatesInput: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates</a>[]

---

##### `localZoneGroupInput`<sup>Optional</sup> <a name="localZoneGroupInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroupInput"></a>

```typescript
public readonly localZoneGroupInput: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.bias"></a>

```typescript
public readonly bias: number;
```

- *Type:* number

---

##### `localZoneGroup`<sup>Required</sup> <a name="localZoneGroup" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.localZoneGroup"></a>

```typescript
public readonly localZoneGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>

---


### Route53RecordsExclusiveResourceRecordSetList <a name="Route53RecordsExclusiveResourceRecordSetList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get"></a>

```typescript
public get(index: number): Route53RecordsExclusiveResourceRecordSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>[]

---


### Route53RecordsExclusiveResourceRecordSetOutputReference <a name="Route53RecordsExclusiveResourceRecordSetOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget">putAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig">putCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation">putGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation">putGeoproximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords">putResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget">resetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig">resetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation">resetGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation">resetGeoproximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId">resetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer">resetMultiValueAnswer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords">resetResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier">resetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId">resetTrafficPolicyInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAliasTarget` <a name="putAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget"></a>

```typescript
public putAliasTarget(value: IResolvable | Route53RecordsExclusiveResourceRecordSetAliasTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putAliasTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>[]

---

##### `putCidrRoutingConfig` <a name="putCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig"></a>

```typescript
public putCidrRoutingConfig(value: IResolvable | Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putCidrRoutingConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>[]

---

##### `putGeolocation` <a name="putGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation"></a>

```typescript
public putGeolocation(value: IResolvable | Route53RecordsExclusiveResourceRecordSetGeolocation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeolocation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>[]

---

##### `putGeoproximityLocation` <a name="putGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation"></a>

```typescript
public putGeoproximityLocation(value: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putGeoproximityLocation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>[]

---

##### `putResourceRecords` <a name="putResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords"></a>

```typescript
public putResourceRecords(value: IResolvable | Route53RecordsExclusiveResourceRecordSetResourceRecords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.putResourceRecords.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>[]

---

##### `resetAliasTarget` <a name="resetAliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetAliasTarget"></a>

```typescript
public resetAliasTarget(): void
```

##### `resetCidrRoutingConfig` <a name="resetCidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetCidrRoutingConfig"></a>

```typescript
public resetCidrRoutingConfig(): void
```

##### `resetFailover` <a name="resetFailover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetFailover"></a>

```typescript
public resetFailover(): void
```

##### `resetGeolocation` <a name="resetGeolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeolocation"></a>

```typescript
public resetGeolocation(): void
```

##### `resetGeoproximityLocation` <a name="resetGeoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetGeoproximityLocation"></a>

```typescript
public resetGeoproximityLocation(): void
```

##### `resetHealthCheckId` <a name="resetHealthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetHealthCheckId"></a>

```typescript
public resetHealthCheckId(): void
```

##### `resetMultiValueAnswer` <a name="resetMultiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetMultiValueAnswer"></a>

```typescript
public resetMultiValueAnswer(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceRecords` <a name="resetResourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetResourceRecords"></a>

```typescript
public resetResourceRecords(): void
```

##### `resetSetIdentifier` <a name="resetSetIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetSetIdentifier"></a>

```typescript
public resetSetIdentifier(): void
```

##### `resetTrafficPolicyInstanceId` <a name="resetTrafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTrafficPolicyInstanceId"></a>

```typescript
public resetTrafficPolicyInstanceId(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation">geolocation</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation">geoproximityLocation</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords">resourceRecords</a></code> | <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput">aliasTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput">cidrRoutingConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput">failoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput">geolocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput">geoproximityLocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput">healthCheckIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput">multiValueAnswerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput">resourceRecordsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput">setIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput">trafficPolicyInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover">failover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer">multiValueAnswer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier">setIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId">trafficPolicyInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasTarget`<sup>Required</sup> <a name="aliasTarget" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTarget"></a>

```typescript
public readonly aliasTarget: Route53RecordsExclusiveResourceRecordSetAliasTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTargetList">Route53RecordsExclusiveResourceRecordSetAliasTargetList</a>

---

##### `cidrRoutingConfig`<sup>Required</sup> <a name="cidrRoutingConfig" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfig"></a>

```typescript
public readonly cidrRoutingConfig: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList</a>

---

##### `geolocation`<sup>Required</sup> <a name="geolocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocation"></a>

```typescript
public readonly geolocation: Route53RecordsExclusiveResourceRecordSetGeolocationList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocationList">Route53RecordsExclusiveResourceRecordSetGeolocationList</a>

---

##### `geoproximityLocation`<sup>Required</sup> <a name="geoproximityLocation" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocation"></a>

```typescript
public readonly geoproximityLocation: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList">Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList</a>

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: Route53RecordsExclusiveResourceRecordSetResourceRecordsList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList">Route53RecordsExclusiveResourceRecordSetResourceRecordsList</a>

---

##### `aliasTargetInput`<sup>Optional</sup> <a name="aliasTargetInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.aliasTargetInput"></a>

```typescript
public readonly aliasTargetInput: IResolvable | Route53RecordsExclusiveResourceRecordSetAliasTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetAliasTarget">Route53RecordsExclusiveResourceRecordSetAliasTarget</a>[]

---

##### `cidrRoutingConfigInput`<sup>Optional</sup> <a name="cidrRoutingConfigInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.cidrRoutingConfigInput"></a>

```typescript
public readonly cidrRoutingConfigInput: IResolvable | Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig">Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig</a>[]

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failoverInput"></a>

```typescript
public readonly failoverInput: string;
```

- *Type:* string

---

##### `geolocationInput`<sup>Optional</sup> <a name="geolocationInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geolocationInput"></a>

```typescript
public readonly geolocationInput: IResolvable | Route53RecordsExclusiveResourceRecordSetGeolocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeolocation">Route53RecordsExclusiveResourceRecordSetGeolocation</a>[]

---

##### `geoproximityLocationInput`<sup>Optional</sup> <a name="geoproximityLocationInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.geoproximityLocationInput"></a>

```typescript
public readonly geoproximityLocationInput: IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetGeoproximityLocation">Route53RecordsExclusiveResourceRecordSetGeoproximityLocation</a>[]

---

##### `healthCheckIdInput`<sup>Optional</sup> <a name="healthCheckIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckIdInput"></a>

```typescript
public readonly healthCheckIdInput: string;
```

- *Type:* string

---

##### `multiValueAnswerInput`<sup>Optional</sup> <a name="multiValueAnswerInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswerInput"></a>

```typescript
public readonly multiValueAnswerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceRecordsInput`<sup>Optional</sup> <a name="resourceRecordsInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.resourceRecordsInput"></a>

```typescript
public readonly resourceRecordsInput: IResolvable | Route53RecordsExclusiveResourceRecordSetResourceRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>[]

---

##### `setIdentifierInput`<sup>Optional</sup> <a name="setIdentifierInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifierInput"></a>

```typescript
public readonly setIdentifierInput: string;
```

- *Type:* string

---

##### `trafficPolicyInstanceIdInput`<sup>Optional</sup> <a name="trafficPolicyInstanceIdInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceIdInput"></a>

```typescript
public readonly trafficPolicyInstanceIdInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.failover"></a>

```typescript
public readonly failover: string;
```

- *Type:* string

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `multiValueAnswer`<sup>Required</sup> <a name="multiValueAnswer" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.multiValueAnswer"></a>

```typescript
public readonly multiValueAnswer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `setIdentifier`<sup>Required</sup> <a name="setIdentifier" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.setIdentifier"></a>

```typescript
public readonly setIdentifier: string;
```

- *Type:* string

---

##### `trafficPolicyInstanceId`<sup>Required</sup> <a name="trafficPolicyInstanceId" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.trafficPolicyInstanceId"></a>

```typescript
public readonly trafficPolicyInstanceId: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSet">Route53RecordsExclusiveResourceRecordSet</a>

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsList <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsList" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get"></a>

```typescript
public get(index: number): Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetResourceRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>[]

---


### Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference <a name="Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveResourceRecordSetResourceRecords;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveResourceRecordSetResourceRecords">Route53RecordsExclusiveResourceRecordSetResourceRecords</a>

---


### Route53RecordsExclusiveTimeoutsOutputReference <a name="Route53RecordsExclusiveTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer"></a>

```typescript
import { route53RecordsExclusive } from '@cdktf/provider-aws'

new route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordsExclusiveTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.route53RecordsExclusive.Route53RecordsExclusiveTimeouts">Route53RecordsExclusiveTimeouts</a>

---



