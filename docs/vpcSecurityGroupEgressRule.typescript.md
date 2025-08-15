# `vpcSecurityGroupEgressRule` Submodule <a name="`vpcSecurityGroupEgressRule` Submodule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupEgressRule <a name="VpcSecurityGroupEgressRule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule aws_vpc_security_group_egress_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer"></a>

```typescript
import { vpcSecurityGroupEgressRule } from '@cdktf/provider-aws'

new vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule(scope: Construct, id: string, config: VpcSecurityGroupEgressRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4">resetCidrIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId">resetPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId">resetReferencedSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidrIpv4` <a name="resetCidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4"></a>

```typescript
public resetCidrIpv4(): void
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6"></a>

```typescript
public resetCidrIpv6(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetPrefixListId` <a name="resetPrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId"></a>

```typescript
public resetPrefixListId(): void
```

##### `resetReferencedSecurityGroupId` <a name="resetReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId"></a>

```typescript
public resetReferencedSecurityGroupId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort"></a>

```typescript
public resetToPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcSecurityGroupEgressRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct"></a>

```typescript
import { vpcSecurityGroupEgressRule } from '@cdktf/provider-aws'

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement"></a>

```typescript
import { vpcSecurityGroupEgressRule } from '@cdktf/provider-aws'

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource"></a>

```typescript
import { vpcSecurityGroupEgressRule } from '@cdktf/provider-aws'

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport"></a>

```typescript
import { vpcSecurityGroupEgressRule } from '@cdktf/provider-aws'

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcSecurityGroupEgressRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcSecurityGroupEgressRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcSecurityGroupEgressRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcSecurityGroupEgressRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId">securityGroupRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input">cidrIpv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput">prefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput">referencedSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4">cidrIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId">prefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId">referencedSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityGroupRuleId`<sup>Required</sup> <a name="securityGroupRuleId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId"></a>

```typescript
public readonly securityGroupRuleId: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `cidrIpv4Input`<sup>Optional</sup> <a name="cidrIpv4Input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input"></a>

```typescript
public readonly cidrIpv4Input: string;
```

- *Type:* string

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input"></a>

```typescript
public readonly cidrIpv6Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `prefixListIdInput`<sup>Optional</sup> <a name="prefixListIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput"></a>

```typescript
public readonly prefixListIdInput: string;
```

- *Type:* string

---

##### `referencedSecurityGroupIdInput`<sup>Optional</sup> <a name="referencedSecurityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput"></a>

```typescript
public readonly referencedSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrIpv4`<sup>Required</sup> <a name="cidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4"></a>

```typescript
public readonly cidrIpv4: string;
```

- *Type:* string

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

---

##### `referencedSecurityGroupId`<sup>Required</sup> <a name="referencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId"></a>

```typescript
public readonly referencedSecurityGroupId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupEgressRuleConfig <a name="VpcSecurityGroupEgressRuleConfig" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.Initializer"></a>

```typescript
import { vpcSecurityGroupEgressRule } from '@cdktf/provider-aws'

const vpcSecurityGroupEgressRuleConfig: vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4">cidrIpv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId">prefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId">referencedSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}.

---

##### `cidrIpv4`<sup>Optional</sup> <a name="cidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4"></a>

```typescript
public readonly cidrIpv4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}.

---

##### `prefixListId`<sup>Optional</sup> <a name="prefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}.

---

##### `referencedSecurityGroupId`<sup>Optional</sup> <a name="referencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId"></a>

```typescript
public readonly referencedSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#region VpcSecurityGroupEgressRule#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}.

---



