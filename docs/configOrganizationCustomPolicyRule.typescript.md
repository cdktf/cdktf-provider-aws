# `configOrganizationCustomPolicyRule` Submodule <a name="`configOrganizationCustomPolicyRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomPolicyRule <a name="ConfigOrganizationCustomPolicyRule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule aws_config_organization_custom_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

new configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule(scope: Construct, id: string, config: ConfigOrganizationCustomPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig">ConfigOrganizationCustomPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig">ConfigOrganizationCustomPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts">resetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters">resetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency">resetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope">resetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope">resetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope">resetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope">resetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ConfigOrganizationCustomPolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `resetDebugLogDeliveryAccounts` <a name="resetDebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts"></a>

```typescript
public resetDebugLogDeliveryAccounts(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts"></a>

```typescript
public resetExcludedAccounts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputParameters` <a name="resetInputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters"></a>

```typescript
public resetInputParameters(): void
```

##### `resetMaximumExecutionFrequency` <a name="resetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency"></a>

```typescript
public resetMaximumExecutionFrequency(): void
```

##### `resetResourceIdScope` <a name="resetResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope"></a>

```typescript
public resetResourceIdScope(): void
```

##### `resetResourceTypesScope` <a name="resetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope"></a>

```typescript
public resetResourceTypesScope(): void
```

##### `resetTagKeyScope` <a name="resetTagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope"></a>

```typescript
public resetTagKeyScope(): void
```

##### `resetTagValueScope` <a name="resetTagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope"></a>

```typescript
public resetTagValueScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigOrganizationCustomPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigOrganizationCustomPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationCustomPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput">debugLogDeliveryAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput">inputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput">maximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput">policyRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput">policyTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput">resourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput">resourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput">tagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput">tagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput">triggerTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters">inputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime">policyRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText">policyText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes">triggerTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a>

---

##### `debugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="debugLogDeliveryAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput"></a>

```typescript
public readonly debugLogDeliveryAccountsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput"></a>

```typescript
public readonly excludedAccountsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput"></a>

```typescript
public readonly inputParametersInput: string;
```

- *Type:* string

---

##### `maximumExecutionFrequencyInput`<sup>Optional</sup> <a name="maximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput"></a>

```typescript
public readonly maximumExecutionFrequencyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyRuntimeInput`<sup>Optional</sup> <a name="policyRuntimeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput"></a>

```typescript
public readonly policyRuntimeInput: string;
```

- *Type:* string

---

##### `policyTextInput`<sup>Optional</sup> <a name="policyTextInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput"></a>

```typescript
public readonly policyTextInput: string;
```

- *Type:* string

---

##### `resourceIdScopeInput`<sup>Optional</sup> <a name="resourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput"></a>

```typescript
public readonly resourceIdScopeInput: string;
```

- *Type:* string

---

##### `resourceTypesScopeInput`<sup>Optional</sup> <a name="resourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput"></a>

```typescript
public readonly resourceTypesScopeInput: string[];
```

- *Type:* string[]

---

##### `tagKeyScopeInput`<sup>Optional</sup> <a name="tagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput"></a>

```typescript
public readonly tagKeyScopeInput: string;
```

- *Type:* string

---

##### `tagValueScopeInput`<sup>Optional</sup> <a name="tagValueScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput"></a>

```typescript
public readonly tagValueScopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ConfigOrganizationCustomPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `triggerTypesInput`<sup>Optional</sup> <a name="triggerTypesInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput"></a>

```typescript
public readonly triggerTypesInput: string[];
```

- *Type:* string[]

---

##### `debugLogDeliveryAccounts`<sup>Required</sup> <a name="debugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts"></a>

```typescript
public readonly debugLogDeliveryAccounts: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

---

##### `maximumExecutionFrequency`<sup>Required</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime"></a>

```typescript
public readonly policyRuntime: string;
```

- *Type:* string

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText"></a>

```typescript
public readonly policyText: string;
```

- *Type:* string

---

##### `resourceIdScope`<sup>Required</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

---

##### `resourceTypesScope`<sup>Required</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

---

##### `tagKeyScope`<sup>Required</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

---

##### `tagValueScope`<sup>Required</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes"></a>

```typescript
public readonly triggerTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomPolicyRuleConfig <a name="ConfigOrganizationCustomPolicyRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.Initializer"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

const configOrganizationCustomPolicyRuleConfig: configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime">policyRuntime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText">policyText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes">triggerTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts">debugLogDeliveryAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters">inputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency">maximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope">resourceIdScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope">resourceTypesScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope">tagKeyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope">tagValueScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}.

---

##### `policyRuntime`<sup>Required</sup> <a name="policyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime"></a>

```typescript
public readonly policyRuntime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}.

---

##### `policyText`<sup>Required</sup> <a name="policyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText"></a>

```typescript
public readonly policyText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}.

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes"></a>

```typescript
public readonly triggerTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}.

---

##### `debugLogDeliveryAccounts`<sup>Optional</sup> <a name="debugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts"></a>

```typescript
public readonly debugLogDeliveryAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters"></a>

```typescript
public readonly inputParameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}.

---

##### `maximumExecutionFrequency`<sup>Optional</sup> <a name="maximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency"></a>

```typescript
public readonly maximumExecutionFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}.

---

##### `resourceIdScope`<sup>Optional</sup> <a name="resourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope"></a>

```typescript
public readonly resourceIdScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}.

---

##### `resourceTypesScope`<sup>Optional</sup> <a name="resourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope"></a>

```typescript
public readonly resourceTypesScope: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}.

---

##### `tagKeyScope`<sup>Optional</sup> <a name="tagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope"></a>

```typescript
public readonly tagKeyScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}.

---

##### `tagValueScope`<sup>Optional</sup> <a name="tagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope"></a>

```typescript
public readonly tagValueScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationCustomPolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}

---

### ConfigOrganizationCustomPolicyRuleTimeouts <a name="ConfigOrganizationCustomPolicyRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.Initializer"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

const configOrganizationCustomPolicyRuleTimeouts: configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { configOrganizationCustomPolicyRule } from '@cdktf/provider-aws'

new configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationCustomPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---



