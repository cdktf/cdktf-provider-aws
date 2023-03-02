# `ceCostCategory` Submodule <a name="`ceCostCategory` Submodule" id="@cdktf/provider-aws.ceCostCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeCostCategory <a name="CeCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category aws_ce_cost_category}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategory(scope: Construct, id: string, config: CeCostCategoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig">CeCostCategoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig">CeCostCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule">putSplitChargeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetEffectiveStart">resetEffectiveStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetSplitChargeRule">resetSplitChargeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule"></a>

```typescript
public putRule(value: IResolvable | CeCostCategoryRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>[]

---

##### `putSplitChargeRule` <a name="putSplitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule"></a>

```typescript
public putSplitChargeRule(value: IResolvable | CeCostCategorySplitChargeRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetEffectiveStart` <a name="resetEffectiveStart" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetEffectiveStart"></a>

```typescript
public resetEffectiveStart(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSplitChargeRule` <a name="resetSplitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetSplitChargeRule"></a>

```typescript
public resetSplitChargeRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

ceCostCategory.CeCostCategory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

ceCostCategory.CeCostCategory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

ceCostCategory.CeCostCategory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveEnd">effectiveEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList">CeCostCategoryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRule">splitChargeRule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList">CeCostCategorySplitChargeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStartInput">effectiveStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersionInput">ruleVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRuleInput">splitChargeRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStart">effectiveStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersion">ruleVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `effectiveEnd`<sup>Required</sup> <a name="effectiveEnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveEnd"></a>

```typescript
public readonly effectiveEnd: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.rule"></a>

```typescript
public readonly rule: CeCostCategoryRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList">CeCostCategoryRuleList</a>

---

##### `splitChargeRule`<sup>Required</sup> <a name="splitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRule"></a>

```typescript
public readonly splitChargeRule: CeCostCategorySplitChargeRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList">CeCostCategorySplitChargeRuleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `effectiveStartInput`<sup>Optional</sup> <a name="effectiveStartInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStartInput"></a>

```typescript
public readonly effectiveStartInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CeCostCategoryRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>[]

---

##### `ruleVersionInput`<sup>Optional</sup> <a name="ruleVersionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersionInput"></a>

```typescript
public readonly ruleVersionInput: string;
```

- *Type:* string

---

##### `splitChargeRuleInput`<sup>Optional</sup> <a name="splitChargeRuleInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRuleInput"></a>

```typescript
public readonly splitChargeRuleInput: IResolvable | CeCostCategorySplitChargeRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `effectiveStart`<sup>Required</sup> <a name="effectiveStart" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStart"></a>

```typescript
public readonly effectiveStart: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleVersion`<sup>Required</sup> <a name="ruleVersion" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersion"></a>

```typescript
public readonly ruleVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CeCostCategoryConfig <a name="CeCostCategoryConfig" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryConfig: ceCostCategory.CeCostCategoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.ruleVersion">ruleVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.effectiveStart">effectiveStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.splitChargeRule">splitChargeRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>[]</code> | split_charge_rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | CeCostCategoryRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `ruleVersion`<sup>Required</sup> <a name="ruleVersion" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.ruleVersion"></a>

```typescript
public readonly ruleVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}.

---

##### `effectiveStart`<sup>Optional</sup> <a name="effectiveStart" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.effectiveStart"></a>

```typescript
public readonly effectiveStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `splitChargeRule`<sup>Optional</sup> <a name="splitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.splitChargeRule"></a>

```typescript
public readonly splitChargeRule: IResolvable | CeCostCategorySplitChargeRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>[]

split_charge_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#split_charge_rule CeCostCategory#split_charge_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}.

---

### CeCostCategoryRule <a name="CeCostCategoryRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRule: ceCostCategory.CeCostCategoryRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.inheritedValue">inheritedValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | inherited_value block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#value CeCostCategory#value}. |

---

##### `inheritedValue`<sup>Optional</sup> <a name="inheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.inheritedValue"></a>

```typescript
public readonly inheritedValue: CeCostCategoryRuleInheritedValue;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

inherited_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#inherited_value CeCostCategory#inherited_value}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.rule"></a>

```typescript
public readonly rule: CeCostCategoryRuleRule;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#value CeCostCategory#value}.

---

### CeCostCategoryRuleInheritedValue <a name="CeCostCategoryRuleInheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleInheritedValue: ceCostCategory.CeCostCategoryRuleInheritedValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionKey">dimensionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_key CeCostCategory#dimension_key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionName">dimensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_name CeCostCategory#dimension_name}. |

---

##### `dimensionKey`<sup>Optional</sup> <a name="dimensionKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionKey"></a>

```typescript
public readonly dimensionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_key CeCostCategory#dimension_key}.

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_name CeCostCategory#dimension_name}.

---

### CeCostCategoryRuleRule <a name="CeCostCategoryRuleRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRule: ceCostCategory.CeCostCategoryRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>[]</code> | and block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.or">or</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>[]</code> | or block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.and"></a>

```typescript
public readonly and: IResolvable | CeCostCategoryRuleRuleAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#and CeCostCategory#and}

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.not"></a>

```typescript
public readonly not: CeCostCategoryRuleRuleNot;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#not CeCostCategory#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.or"></a>

```typescript
public readonly or: IResolvable | CeCostCategoryRuleRuleOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>[]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#or CeCostCategory#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleAnd <a name="CeCostCategoryRuleRuleAnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleAnd: ceCostCategory.CeCostCategoryRuleRuleAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleAndCostCategory <a name="CeCostCategoryRuleRuleAndCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleAndCostCategory: ceCostCategory.CeCostCategoryRuleRuleAndCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleAndDimension <a name="CeCostCategoryRuleRuleAndDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleAndDimension: ceCostCategory.CeCostCategoryRuleRuleAndDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleAndTags <a name="CeCostCategoryRuleRuleAndTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleAndTags: ceCostCategory.CeCostCategoryRuleRuleAndTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleCostCategory <a name="CeCostCategoryRuleRuleCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleCostCategory: ceCostCategory.CeCostCategoryRuleRuleCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleDimension <a name="CeCostCategoryRuleRuleDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleDimension: ceCostCategory.CeCostCategoryRuleRuleDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNot <a name="CeCostCategoryRuleRuleNot" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleNot: ceCostCategory.CeCostCategoryRuleRuleNot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleNotCostCategory <a name="CeCostCategoryRuleRuleNotCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleNotCostCategory: ceCostCategory.CeCostCategoryRuleRuleNotCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNotDimension <a name="CeCostCategoryRuleRuleNotDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleNotDimension: ceCostCategory.CeCostCategoryRuleRuleNotDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNotTags <a name="CeCostCategoryRuleRuleNotTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleNotTags: ceCostCategory.CeCostCategoryRuleRuleNotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOr <a name="CeCostCategoryRuleRuleOr" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleOr: ceCostCategory.CeCostCategoryRuleRuleOr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleOrCostCategory <a name="CeCostCategoryRuleRuleOrCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleOrCostCategory: ceCostCategory.CeCostCategoryRuleRuleOrCostCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOrDimension <a name="CeCostCategoryRuleRuleOrDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleOrDimension: ceCostCategory.CeCostCategoryRuleRuleOrDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOrTags <a name="CeCostCategoryRuleRuleOrTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleOrTags: ceCostCategory.CeCostCategoryRuleRuleOrTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleTags <a name="CeCostCategoryRuleRuleTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategoryRuleRuleTags: ceCostCategory.CeCostCategoryRuleRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategorySplitChargeRule <a name="CeCostCategorySplitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategorySplitChargeRule: ceCostCategory.CeCostCategorySplitChargeRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#method CeCostCategory#method}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#source CeCostCategory#source}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.targets">targets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#targets CeCostCategory#targets}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>[]</code> | parameter block. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#method CeCostCategory#method}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#source CeCostCategory#source}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#targets CeCostCategory#targets}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | CeCostCategorySplitChargeRuleParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#parameter CeCostCategory#parameter}

---

### CeCostCategorySplitChargeRuleParameter <a name="CeCostCategorySplitChargeRuleParameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

const ceCostCategorySplitChargeRuleParameter: ceCostCategory.CeCostCategorySplitChargeRuleParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeCostCategoryRuleInheritedValueOutputReference <a name="CeCostCategoryRuleInheritedValueOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionKey">resetDimensionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionKey` <a name="resetDimensionKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionKey"></a>

```typescript
public resetDimensionKey(): void
```

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionName"></a>

```typescript
public resetDimensionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKeyInput">dimensionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey">dimensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionKeyInput`<sup>Optional</sup> <a name="dimensionKeyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKeyInput"></a>

```typescript
public readonly dimensionKeyInput: string;
```

- *Type:* string

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionNameInput"></a>

```typescript
public readonly dimensionNameInput: string;
```

- *Type:* string

---

##### `dimensionKey`<sup>Required</sup> <a name="dimensionKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey"></a>

```typescript
public readonly dimensionKey: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleInheritedValue;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---


### CeCostCategoryRuleList <a name="CeCostCategoryRuleList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get"></a>

```typescript
public get(index: number): CeCostCategoryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeCostCategoryRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>[]

---


### CeCostCategoryRuleOutputReference <a name="CeCostCategoryRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue">putInheritedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetInheritedValue">resetInheritedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInheritedValue` <a name="putInheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue"></a>

```typescript
public putInheritedValue(value: CeCostCategoryRuleInheritedValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule"></a>

```typescript
public putRule(value: CeCostCategoryRuleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---

##### `resetInheritedValue` <a name="resetInheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetInheritedValue"></a>

```typescript
public resetInheritedValue(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValue">inheritedValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference">CeCostCategoryRuleInheritedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference">CeCostCategoryRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValueInput">inheritedValueInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.ruleInput">ruleInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inheritedValue`<sup>Required</sup> <a name="inheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValue"></a>

```typescript
public readonly inheritedValue: CeCostCategoryRuleInheritedValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference">CeCostCategoryRuleInheritedValueOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.rule"></a>

```typescript
public readonly rule: CeCostCategoryRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference">CeCostCategoryRuleRuleOutputReference</a>

---

##### `inheritedValueInput`<sup>Optional</sup> <a name="inheritedValueInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValueInput"></a>

```typescript
public readonly inheritedValueInput: CeCostCategoryRuleInheritedValue;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: CeCostCategoryRuleRule;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a> | cdktf.IResolvable

---


### CeCostCategoryRuleRuleAndCostCategoryOutputReference <a name="CeCostCategoryRuleRuleAndCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---


### CeCostCategoryRuleRuleAndDimensionOutputReference <a name="CeCostCategoryRuleRuleAndDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---


### CeCostCategoryRuleRuleAndList <a name="CeCostCategoryRuleRuleAndList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get"></a>

```typescript
public get(index: number): CeCostCategoryRuleRuleAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeCostCategoryRuleRuleAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>[]

---


### CeCostCategoryRuleRuleAndOutputReference <a name="CeCostCategoryRuleRuleAndOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeCostCategoryRuleRuleAndCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeCostCategoryRuleRuleAndDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags"></a>

```typescript
public putTags(value: CeCostCategoryRuleRuleAndTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference">CeCostCategoryRuleRuleAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference">CeCostCategoryRuleRuleAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference">CeCostCategoryRuleRuleAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleAndCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference">CeCostCategoryRuleRuleAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleAndDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference">CeCostCategoryRuleRuleAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleAndTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference">CeCostCategoryRuleRuleAndTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeCostCategoryRuleRuleAndCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeCostCategoryRuleRuleAndDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeCostCategoryRuleRuleAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleAnd | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a> | cdktf.IResolvable

---


### CeCostCategoryRuleRuleAndTagsOutputReference <a name="CeCostCategoryRuleRuleAndTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleAndTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---


### CeCostCategoryRuleRuleCostCategoryOutputReference <a name="CeCostCategoryRuleRuleCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---


### CeCostCategoryRuleRuleDimensionOutputReference <a name="CeCostCategoryRuleRuleDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---


### CeCostCategoryRuleRuleNotCostCategoryOutputReference <a name="CeCostCategoryRuleRuleNotCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---


### CeCostCategoryRuleRuleNotDimensionOutputReference <a name="CeCostCategoryRuleRuleNotDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---


### CeCostCategoryRuleRuleNotOutputReference <a name="CeCostCategoryRuleRuleNotOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleNotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeCostCategoryRuleRuleNotCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeCostCategoryRuleRuleNotDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags"></a>

```typescript
public putTags(value: CeCostCategoryRuleRuleNotTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference">CeCostCategoryRuleRuleNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference">CeCostCategoryRuleRuleNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference">CeCostCategoryRuleRuleNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleNotCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference">CeCostCategoryRuleRuleNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleNotDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference">CeCostCategoryRuleRuleNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleNotTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference">CeCostCategoryRuleRuleNotTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeCostCategoryRuleRuleNotCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeCostCategoryRuleRuleNotDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeCostCategoryRuleRuleNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleNot;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---


### CeCostCategoryRuleRuleNotTagsOutputReference <a name="CeCostCategoryRuleRuleNotTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleNotTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---


### CeCostCategoryRuleRuleOrCostCategoryOutputReference <a name="CeCostCategoryRuleRuleOrCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---


### CeCostCategoryRuleRuleOrDimensionOutputReference <a name="CeCostCategoryRuleRuleOrDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---


### CeCostCategoryRuleRuleOrList <a name="CeCostCategoryRuleRuleOrList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleOrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get"></a>

```typescript
public get(index: number): CeCostCategoryRuleRuleOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeCostCategoryRuleRuleOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>[]

---


### CeCostCategoryRuleRuleOrOutputReference <a name="CeCostCategoryRuleRuleOrOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleOrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeCostCategoryRuleRuleOrCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeCostCategoryRuleRuleOrDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags"></a>

```typescript
public putTags(value: CeCostCategoryRuleRuleOrTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference">CeCostCategoryRuleRuleOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference">CeCostCategoryRuleRuleOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference">CeCostCategoryRuleRuleOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleOrCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference">CeCostCategoryRuleRuleOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleOrDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference">CeCostCategoryRuleRuleOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleOrTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference">CeCostCategoryRuleRuleOrTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeCostCategoryRuleRuleOrCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeCostCategoryRuleRuleOrDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeCostCategoryRuleRuleOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleOr | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a> | cdktf.IResolvable

---


### CeCostCategoryRuleRuleOrTagsOutputReference <a name="CeCostCategoryRuleRuleOrTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleOrTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---


### CeCostCategoryRuleRuleOutputReference <a name="CeCostCategoryRuleRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetOr">resetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | CeCostCategoryRuleRuleAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>[]

---

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory"></a>

```typescript
public putCostCategory(value: CeCostCategoryRuleRuleCostCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension"></a>

```typescript
public putDimension(value: CeCostCategoryRuleRuleDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---

##### `putNot` <a name="putNot" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot"></a>

```typescript
public putNot(value: CeCostCategoryRuleRuleNot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---

##### `putOr` <a name="putOr" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr"></a>

```typescript
public putOr(value: IResolvable | CeCostCategoryRuleRuleOr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags"></a>

```typescript
public putTags(value: CeCostCategoryRuleRuleTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetCostCategory"></a>

```typescript
public resetCostCategory(): void
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetNot` <a name="resetNot" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetNot"></a>

```typescript
public resetNot(): void
```

##### `resetOr` <a name="resetOr" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetOr"></a>

```typescript
public resetOr(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList">CeCostCategoryRuleRuleAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference">CeCostCategoryRuleRuleCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference">CeCostCategoryRuleRuleDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference">CeCostCategoryRuleRuleNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList">CeCostCategoryRuleRuleOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference">CeCostCategoryRuleRuleTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.notInput">notInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.orInput">orInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.and"></a>

```typescript
public readonly and: CeCostCategoryRuleRuleAndList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList">CeCostCategoryRuleRuleAndList</a>

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategory"></a>

```typescript
public readonly costCategory: CeCostCategoryRuleRuleCostCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference">CeCostCategoryRuleRuleCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimension"></a>

```typescript
public readonly dimension: CeCostCategoryRuleRuleDimensionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference">CeCostCategoryRuleRuleDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.not"></a>

```typescript
public readonly not: CeCostCategoryRuleRuleNotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference">CeCostCategoryRuleRuleNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.or"></a>

```typescript
public readonly or: CeCostCategoryRuleRuleOrList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList">CeCostCategoryRuleRuleOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tags"></a>

```typescript
public readonly tags: CeCostCategoryRuleRuleTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference">CeCostCategoryRuleRuleTagsOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | CeCostCategoryRuleRuleAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>[]

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategoryInput"></a>

```typescript
public readonly costCategoryInput: CeCostCategoryRuleRuleCostCategory;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: CeCostCategoryRuleRuleDimension;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.notInput"></a>

```typescript
public readonly notInput: CeCostCategoryRuleRuleNot;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.orInput"></a>

```typescript
public readonly orInput: IResolvable | CeCostCategoryRuleRuleOr[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: CeCostCategoryRuleRuleTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRule;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---


### CeCostCategoryRuleRuleTagsOutputReference <a name="CeCostCategoryRuleRuleTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetMatchOptions"></a>

```typescript
public resetMatchOptions(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptionsInput"></a>

```typescript
public readonly matchOptionsInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptions"></a>

```typescript
public readonly matchOptions: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategoryRuleRuleTags;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---


### CeCostCategorySplitChargeRuleList <a name="CeCostCategorySplitChargeRuleList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategorySplitChargeRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get"></a>

```typescript
public get(index: number): CeCostCategorySplitChargeRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeCostCategorySplitChargeRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>[]

---


### CeCostCategorySplitChargeRuleOutputReference <a name="CeCostCategorySplitChargeRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategorySplitChargeRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter"></a>

```typescript
public putParameter(value: IResolvable | CeCostCategorySplitChargeRuleParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>[]

---

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList">CeCostCategorySplitChargeRuleParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targetsInput">targetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameter"></a>

```typescript
public readonly parameter: CeCostCategorySplitChargeRuleParameterList;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList">CeCostCategorySplitChargeRuleParameterList</a>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | CeCostCategorySplitChargeRuleParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: string[];
```

- *Type:* string[]

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategorySplitChargeRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a> | cdktf.IResolvable

---


### CeCostCategorySplitChargeRuleParameterList <a name="CeCostCategorySplitChargeRuleParameterList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategorySplitChargeRuleParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get"></a>

```typescript
public get(index: number): CeCostCategorySplitChargeRuleParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CeCostCategorySplitChargeRuleParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>[]

---


### CeCostCategorySplitChargeRuleParameterOutputReference <a name="CeCostCategorySplitChargeRuleParameterOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer"></a>

```typescript
import { ceCostCategory } from '@cdktf/provider-aws'

new ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CeCostCategorySplitChargeRuleParameter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a> | cdktf.IResolvable

---



