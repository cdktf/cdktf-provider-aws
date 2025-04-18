# `vpclatticeListenerRule` Submodule <a name="`vpclatticeListenerRule` Submodule" id="@cdktf/provider-aws.vpclatticeListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeListenerRule <a name="VpclatticeListenerRule" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule aws_vpclattice_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRule(scope: Construct, id: string, config: VpclatticeListenerRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig">VpclatticeListenerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig">VpclatticeListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putAction"></a>

```typescript
public putAction(value: VpclatticeListenerRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putMatch"></a>

```typescript
public putMatch(value: VpclatticeListenerRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putTimeouts"></a>

```typescript
public putTimeouts(value: VpclatticeListenerRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeListenerRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isConstruct"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

vpclatticeListenerRule.VpclatticeListenerRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformElement"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

vpclatticeListenerRule.VpclatticeListenerRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformResource"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

vpclatticeListenerRule.VpclatticeListenerRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpclatticeListenerRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeListenerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference">VpclatticeListenerRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference">VpclatticeListenerRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference">VpclatticeListenerRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifierInput">listenerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifier">listenerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.action"></a>

```typescript
public readonly action: VpclatticeListenerRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference">VpclatticeListenerRuleActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.match"></a>

```typescript
public readonly match: VpclatticeListenerRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference">VpclatticeListenerRuleMatchOutputReference</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeouts"></a>

```typescript
public readonly timeouts: VpclatticeListenerRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference">VpclatticeListenerRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.actionInput"></a>

```typescript
public readonly actionInput: VpclatticeListenerRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenerIdentifierInput`<sup>Optional</sup> <a name="listenerIdentifierInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifierInput"></a>

```typescript
public readonly listenerIdentifierInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.matchInput"></a>

```typescript
public readonly matchInput: VpclatticeListenerRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifierInput"></a>

```typescript
public readonly serviceIdentifierInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpclatticeListenerRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifier"></a>

```typescript
public readonly listenerIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeListenerRuleAction <a name="VpclatticeListenerRuleAction" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleAction: vpclatticeListenerRule.VpclatticeListenerRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a></code> | forward block. |

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: VpclatticeListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#fixed_response VpclatticeListenerRule#fixed_response}

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.forward"></a>

```typescript
public readonly forward: VpclatticeListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#forward VpclatticeListenerRule#forward}

---

### VpclatticeListenerRuleActionFixedResponse <a name="VpclatticeListenerRuleActionFixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleActionFixedResponse: vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse.property.statusCode">statusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#status_code VpclatticeListenerRule#status_code}. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#status_code VpclatticeListenerRule#status_code}.

---

### VpclatticeListenerRuleActionForward <a name="VpclatticeListenerRuleActionForward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleActionForward: vpclatticeListenerRule.VpclatticeListenerRuleActionForward = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward.property.targetGroups">targetGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>[]</code> | target_groups block. |

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward.property.targetGroups"></a>

```typescript
public readonly targetGroups: IResolvable | VpclatticeListenerRuleActionForwardTargetGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>[]

target_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#target_groups VpclatticeListenerRule#target_groups}

---

### VpclatticeListenerRuleActionForwardTargetGroups <a name="VpclatticeListenerRuleActionForwardTargetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleActionForwardTargetGroups: vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#target_group_identifier VpclatticeListenerRule#target_group_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#weight VpclatticeListenerRule#weight}. |

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.targetGroupIdentifier"></a>

```typescript
public readonly targetGroupIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#target_group_identifier VpclatticeListenerRule#target_group_identifier}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#weight VpclatticeListenerRule#weight}.

---

### VpclatticeListenerRuleConfig <a name="VpclatticeListenerRuleConfig" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleConfig: vpclatticeListenerRule.VpclatticeListenerRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.listenerIdentifier">listenerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#listener_identifier VpclatticeListenerRule#listener_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#priority VpclatticeListenerRule#priority}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#service_identifier VpclatticeListenerRule#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#id VpclatticeListenerRule#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#tags VpclatticeListenerRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#tags_all VpclatticeListenerRule#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.action"></a>

```typescript
public readonly action: VpclatticeListenerRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#action VpclatticeListenerRule#action}

---

##### `listenerIdentifier`<sup>Required</sup> <a name="listenerIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.listenerIdentifier"></a>

```typescript
public readonly listenerIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#listener_identifier VpclatticeListenerRule#listener_identifier}.

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.match"></a>

```typescript
public readonly match: VpclatticeListenerRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#priority VpclatticeListenerRule#priority}.

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#service_identifier VpclatticeListenerRule#service_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#id VpclatticeListenerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#tags VpclatticeListenerRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#tags_all VpclatticeListenerRule#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpclatticeListenerRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#timeouts VpclatticeListenerRule#timeouts}

---

### VpclatticeListenerRuleMatch <a name="VpclatticeListenerRuleMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleMatch: vpclatticeListenerRule.VpclatticeListenerRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch.property.httpMatch">httpMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a></code> | http_match block. |

---

##### `httpMatch`<sup>Optional</sup> <a name="httpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch.property.httpMatch"></a>

```typescript
public readonly httpMatch: VpclatticeListenerRuleMatchHttpMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

http_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#http_match VpclatticeListenerRule#http_match}

---

### VpclatticeListenerRuleMatchHttpMatch <a name="VpclatticeListenerRuleMatchHttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleMatchHttpMatch: vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.headerMatches">headerMatches</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>[]</code> | header_matches block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#method VpclatticeListenerRule#method}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.pathMatch">pathMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a></code> | path_match block. |

---

##### `headerMatches`<sup>Optional</sup> <a name="headerMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.headerMatches"></a>

```typescript
public readonly headerMatches: IResolvable | VpclatticeListenerRuleMatchHttpMatchHeaderMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>[]

header_matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#header_matches VpclatticeListenerRule#header_matches}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#method VpclatticeListenerRule#method}.

---

##### `pathMatch`<sup>Optional</sup> <a name="pathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.pathMatch"></a>

```typescript
public readonly pathMatch: VpclatticeListenerRuleMatchHttpMatchPathMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

path_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#path_match VpclatticeListenerRule#path_match}

---

### VpclatticeListenerRuleMatchHttpMatchHeaderMatches <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleMatchHttpMatchHeaderMatches: vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.match"></a>

```typescript
public readonly match: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}.

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}.

---

### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch: vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.contains">contains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#contains VpclatticeListenerRule#contains}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#contains VpclatticeListenerRule#contains}.

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}.

---

### VpclatticeListenerRuleMatchHttpMatchPathMatch <a name="VpclatticeListenerRuleMatchHttpMatchPathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleMatchHttpMatchPathMatch: vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.match"></a>

```typescript
public readonly match: VpclatticeListenerRuleMatchHttpMatchPathMatchMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}

---

##### `caseSensitive`<sup>Optional</sup> <a name="caseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}.

---

### VpclatticeListenerRuleMatchHttpMatchPathMatchMatch <a name="VpclatticeListenerRuleMatchHttpMatchPathMatchMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleMatchHttpMatchPathMatchMatch: vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}.

---

### VpclatticeListenerRuleTimeouts <a name="VpclatticeListenerRuleTimeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

const vpclatticeListenerRuleTimeouts: vpclatticeListenerRule.VpclatticeListenerRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#create VpclatticeListenerRule#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#delete VpclatticeListenerRule#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#update VpclatticeListenerRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#create VpclatticeListenerRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#delete VpclatticeListenerRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpclattice_listener_rule#update VpclatticeListenerRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeListenerRuleActionFixedResponseOutputReference <a name="VpclatticeListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

---


### VpclatticeListenerRuleActionForwardOutputReference <a name="VpclatticeListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.putTargetGroups">putTargetGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetGroups` <a name="putTargetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.putTargetGroups"></a>

```typescript
public putTargetGroups(value: IResolvable | VpclatticeListenerRuleActionForwardTargetGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList">VpclatticeListenerRuleActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroupsInput">targetGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroups"></a>

```typescript
public readonly targetGroups: VpclatticeListenerRuleActionForwardTargetGroupsList;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList">VpclatticeListenerRuleActionForwardTargetGroupsList</a>

---

##### `targetGroupsInput`<sup>Optional</sup> <a name="targetGroupsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroupsInput"></a>

```typescript
public readonly targetGroupsInput: IResolvable | VpclatticeListenerRuleActionForwardTargetGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

---


### VpclatticeListenerRuleActionForwardTargetGroupsList <a name="VpclatticeListenerRuleActionForwardTargetGroupsList" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.get"></a>

```typescript
public get(index: number): VpclatticeListenerRuleActionForwardTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeListenerRuleActionForwardTargetGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>[]

---


### VpclatticeListenerRuleActionForwardTargetGroupsOutputReference <a name="VpclatticeListenerRuleActionForwardTargetGroupsOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput">targetGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">targetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroupIdentifierInput`<sup>Optional</sup> <a name="targetGroupIdentifierInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput"></a>

```typescript
public readonly targetGroupIdentifierInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `targetGroupIdentifier`<sup>Required</sup> <a name="targetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```typescript
public readonly targetGroupIdentifier: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeListenerRuleActionForwardTargetGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups">VpclatticeListenerRuleActionForwardTargetGroups</a>

---


### VpclatticeListenerRuleActionOutputReference <a name="VpclatticeListenerRuleActionOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetForward">resetForward</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putFixedResponse"></a>

```typescript
public putFixedResponse(value: VpclatticeListenerRuleActionFixedResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putForward"></a>

```typescript
public putForward(value: VpclatticeListenerRuleActionForward): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

---

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetFixedResponse"></a>

```typescript
public resetFixedResponse(): void
```

##### `resetForward` <a name="resetForward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetForward"></a>

```typescript
public resetForward(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference">VpclatticeListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference">VpclatticeListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forwardInput">forwardInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: VpclatticeListenerRuleActionFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference">VpclatticeListenerRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forward"></a>

```typescript
public readonly forward: VpclatticeListenerRuleActionForwardOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference">VpclatticeListenerRuleActionForwardOutputReference</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponseInput"></a>

```typescript
public readonly fixedResponseInput: VpclatticeListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forwardInput"></a>

```typescript
public readonly forwardInput: VpclatticeListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

---


### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.get"></a>

```typescript
public get(index: number): VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeListenerRuleMatchHttpMatchHeaderMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>[]

---


### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput">containsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains">contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

---


### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive">resetCaseSensitive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch"></a>

```typescript
public putMatch(value: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive"></a>

```typescript
public resetCaseSensitive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.match"></a>

```typescript
public readonly match: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a>

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeListenerRuleMatchHttpMatchHeaderMatches;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>

---


### VpclatticeListenerRuleMatchHttpMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putHeaderMatches">putHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putPathMatch">putPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetHeaderMatches">resetHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetPathMatch">resetPathMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderMatches` <a name="putHeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putHeaderMatches"></a>

```typescript
public putHeaderMatches(value: IResolvable | VpclatticeListenerRuleMatchHttpMatchHeaderMatches[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putHeaderMatches.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>[]

---

##### `putPathMatch` <a name="putPathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putPathMatch"></a>

```typescript
public putPathMatch(value: VpclatticeListenerRuleMatchHttpMatchPathMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putPathMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

---

##### `resetHeaderMatches` <a name="resetHeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetHeaderMatches"></a>

```typescript
public resetHeaderMatches(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPathMatch` <a name="resetPathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetPathMatch"></a>

```typescript
public resetPathMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatches">headerMatches</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatch">pathMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatchesInput">headerMatchesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatchInput">pathMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerMatches`<sup>Required</sup> <a name="headerMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatches"></a>

```typescript
public readonly headerMatches: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList</a>

---

##### `pathMatch`<sup>Required</sup> <a name="pathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatch"></a>

```typescript
public readonly pathMatch: VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference</a>

---

##### `headerMatchesInput`<sup>Optional</sup> <a name="headerMatchesInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatchesInput"></a>

```typescript
public readonly headerMatchesInput: IResolvable | VpclatticeListenerRuleMatchHttpMatchHeaderMatches[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches">VpclatticeListenerRuleMatchHttpMatchHeaderMatches</a>[]

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `pathMatchInput`<sup>Optional</sup> <a name="pathMatchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatchInput"></a>

```typescript
public readonly pathMatchInput: VpclatticeListenerRuleMatchHttpMatchPathMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleMatchHttpMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

---


### VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleMatchHttpMatchPathMatchMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

---


### VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive">resetCaseSensitive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.putMatch"></a>

```typescript
public putMatch(value: VpclatticeListenerRuleMatchHttpMatchPathMatchMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

---

##### `resetCaseSensitive` <a name="resetCaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive"></a>

```typescript
public resetCaseSensitive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.match"></a>

```typescript
public readonly match: VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference</a>

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: VpclatticeListenerRuleMatchHttpMatchPathMatchMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleMatchHttpMatchPathMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

---


### VpclatticeListenerRuleMatchOutputReference <a name="VpclatticeListenerRuleMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.putHttpMatch">putHttpMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resetHttpMatch">resetHttpMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpMatch` <a name="putHttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.putHttpMatch"></a>

```typescript
public putHttpMatch(value: VpclatticeListenerRuleMatchHttpMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.putHttpMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

---

##### `resetHttpMatch` <a name="resetHttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resetHttpMatch"></a>

```typescript
public resetHttpMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatch">httpMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatchInput">httpMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpMatch`<sup>Required</sup> <a name="httpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatch"></a>

```typescript
public readonly httpMatch: VpclatticeListenerRuleMatchHttpMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchOutputReference</a>

---

##### `httpMatchInput`<sup>Optional</sup> <a name="httpMatchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatchInput"></a>

```typescript
public readonly httpMatchInput: VpclatticeListenerRuleMatchHttpMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpclatticeListenerRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

---


### VpclatticeListenerRuleTimeoutsOutputReference <a name="VpclatticeListenerRuleTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpclatticeListenerRule } from '@cdktf/provider-aws'

new vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeListenerRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a>

---



