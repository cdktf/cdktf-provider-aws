# `dataAwsWafSubscribedRuleGroup` Submodule <a name="`dataAwsWafSubscribedRuleGroup` Submodule" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWafSubscribedRuleGroup <a name="DataAwsWafSubscribedRuleGroup" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/waf_subscribed_rule_group aws_waf_subscribed_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.Initializer"></a>

```typescript
import { dataAwsWafSubscribedRuleGroup } from '@cdktf/provider-aws'

new dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup(scope: Construct, id: string, config?: DataAwsWafSubscribedRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig">DataAwsWafSubscribedRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig">DataAwsWafSubscribedRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isConstruct"></a>

```typescript
import { dataAwsWafSubscribedRuleGroup } from '@cdktf/provider-aws'

dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformElement"></a>

```typescript
import { dataAwsWafSubscribedRuleGroup } from '@cdktf/provider-aws'

dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsWafSubscribedRuleGroup } from '@cdktf/provider-aws'

dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWafSubscribedRuleGroupConfig <a name="DataAwsWafSubscribedRuleGroupConfig" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.Initializer"></a>

```typescript
import { dataAwsWafSubscribedRuleGroup } from '@cdktf/provider-aws'

const dataAwsWafSubscribedRuleGroupConfig: dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_subscribed_rule_group#id DataAwsWafSubscribedRuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_subscribed_rule_group#metric_name DataAwsWafSubscribedRuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_subscribed_rule_group#name DataAwsWafSubscribedRuleGroup#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_subscribed_rule_group#id DataAwsWafSubscribedRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_subscribed_rule_group#metric_name DataAwsWafSubscribedRuleGroup#metric_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsWafSubscribedRuleGroup.DataAwsWafSubscribedRuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_subscribed_rule_group#name DataAwsWafSubscribedRuleGroup#name}.

---



