# `quicksightIpRestriction` Submodule <a name="`quicksightIpRestriction` Submodule" id="@cdktf/provider-aws.quicksightIpRestriction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightIpRestriction <a name="QuicksightIpRestriction" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction aws_quicksight_ip_restriction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer"></a>

```typescript
import { quicksightIpRestriction } from '@cdktf/provider-aws'

new quicksightIpRestriction.QuicksightIpRestriction(scope: Construct, id: string, config: QuicksightIpRestrictionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig">QuicksightIpRestrictionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig">QuicksightIpRestrictionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetIpRestrictionRuleMap">resetIpRestrictionRuleMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcEndpointIdRestrictionRuleMap">resetVpcEndpointIdRestrictionRuleMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcIdRestrictionRuleMap">resetVpcIdRestrictionRuleMap</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetIpRestrictionRuleMap` <a name="resetIpRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetIpRestrictionRuleMap"></a>

```typescript
public resetIpRestrictionRuleMap(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetVpcEndpointIdRestrictionRuleMap` <a name="resetVpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcEndpointIdRestrictionRuleMap"></a>

```typescript
public resetVpcEndpointIdRestrictionRuleMap(): void
```

##### `resetVpcIdRestrictionRuleMap` <a name="resetVpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcIdRestrictionRuleMap"></a>

```typescript
public resetVpcIdRestrictionRuleMap(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightIpRestriction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct"></a>

```typescript
import { quicksightIpRestriction } from '@cdktf/provider-aws'

quicksightIpRestriction.QuicksightIpRestriction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement"></a>

```typescript
import { quicksightIpRestriction } from '@cdktf/provider-aws'

quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource"></a>

```typescript
import { quicksightIpRestriction } from '@cdktf/provider-aws'

quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport"></a>

```typescript
import { quicksightIpRestriction } from '@cdktf/provider-aws'

quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuicksightIpRestriction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightIpRestriction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightIpRestriction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightIpRestriction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMapInput">ipRestrictionRuleMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMapInput">vpcEndpointIdRestrictionRuleMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMapInput">vpcIdRestrictionRuleMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMap">ipRestrictionRuleMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMap">vpcEndpointIdRestrictionRuleMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMap">vpcIdRestrictionRuleMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionRuleMapInput`<sup>Optional</sup> <a name="ipRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMapInput"></a>

```typescript
public readonly ipRestrictionRuleMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `vpcEndpointIdRestrictionRuleMapInput`<sup>Optional</sup> <a name="vpcEndpointIdRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMapInput"></a>

```typescript
public readonly vpcEndpointIdRestrictionRuleMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdRestrictionRuleMapInput`<sup>Optional</sup> <a name="vpcIdRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMapInput"></a>

```typescript
public readonly vpcIdRestrictionRuleMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipRestrictionRuleMap`<sup>Required</sup> <a name="ipRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMap"></a>

```typescript
public readonly ipRestrictionRuleMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `vpcEndpointIdRestrictionRuleMap`<sup>Required</sup> <a name="vpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMap"></a>

```typescript
public readonly vpcEndpointIdRestrictionRuleMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdRestrictionRuleMap`<sup>Required</sup> <a name="vpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMap"></a>

```typescript
public readonly vpcIdRestrictionRuleMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightIpRestrictionConfig <a name="QuicksightIpRestrictionConfig" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.Initializer"></a>

```typescript
import { quicksightIpRestriction } from '@cdktf/provider-aws'

const quicksightIpRestrictionConfig: quicksightIpRestriction.QuicksightIpRestrictionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#enabled QuicksightIpRestriction#enabled}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#aws_account_id QuicksightIpRestriction#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.ipRestrictionRuleMap">ipRestrictionRuleMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#ip_restriction_rule_map QuicksightIpRestriction#ip_restriction_rule_map}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcEndpointIdRestrictionRuleMap">vpcEndpointIdRestrictionRuleMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#vpc_endpoint_id_restriction_rule_map QuicksightIpRestriction#vpc_endpoint_id_restriction_rule_map}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcIdRestrictionRuleMap">vpcIdRestrictionRuleMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#vpc_id_restriction_rule_map QuicksightIpRestriction#vpc_id_restriction_rule_map}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#enabled QuicksightIpRestriction#enabled}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#aws_account_id QuicksightIpRestriction#aws_account_id}.

---

##### `ipRestrictionRuleMap`<sup>Optional</sup> <a name="ipRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.ipRestrictionRuleMap"></a>

```typescript
public readonly ipRestrictionRuleMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#ip_restriction_rule_map QuicksightIpRestriction#ip_restriction_rule_map}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#region QuicksightIpRestriction#region}

---

##### `vpcEndpointIdRestrictionRuleMap`<sup>Optional</sup> <a name="vpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcEndpointIdRestrictionRuleMap"></a>

```typescript
public readonly vpcEndpointIdRestrictionRuleMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#vpc_endpoint_id_restriction_rule_map QuicksightIpRestriction#vpc_endpoint_id_restriction_rule_map}.

---

##### `vpcIdRestrictionRuleMap`<sup>Optional</sup> <a name="vpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcIdRestrictionRuleMap"></a>

```typescript
public readonly vpcIdRestrictionRuleMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/quicksight_ip_restriction#vpc_id_restriction_rule_map QuicksightIpRestriction#vpc_id_restriction_rule_map}.

---



