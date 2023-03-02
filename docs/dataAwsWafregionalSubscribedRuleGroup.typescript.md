# `dataAwsWafregionalSubscribedRuleGroup` Submodule <a name="`dataAwsWafregionalSubscribedRuleGroup` Submodule" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWafregionalSubscribedRuleGroup <a name="DataAwsWafregionalSubscribedRuleGroup" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_subscribed_rule_group aws_wafregional_subscribed_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.Initializer"></a>

```typescript
import { dataAwsWafregionalSubscribedRuleGroup } from '@cdktf/provider-aws'

new dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup(scope: Construct, id: string, config?: DataAwsWafregionalSubscribedRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig">DataAwsWafregionalSubscribedRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig">DataAwsWafregionalSubscribedRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isConstruct"></a>

```typescript
import { dataAwsWafregionalSubscribedRuleGroup } from '@cdktf/provider-aws'

dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformElement"></a>

```typescript
import { dataAwsWafregionalSubscribedRuleGroup } from '@cdktf/provider-aws'

dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsWafregionalSubscribedRuleGroup } from '@cdktf/provider-aws'

dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWafregionalSubscribedRuleGroupConfig <a name="DataAwsWafregionalSubscribedRuleGroupConfig" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.Initializer"></a>

```typescript
import { dataAwsWafregionalSubscribedRuleGroup } from '@cdktf/provider-aws'

const dataAwsWafregionalSubscribedRuleGroupConfig: dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_subscribed_rule_group#id DataAwsWafregionalSubscribedRuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_subscribed_rule_group#metric_name DataAwsWafregionalSubscribedRuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_subscribed_rule_group#name DataAwsWafregionalSubscribedRuleGroup#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_subscribed_rule_group#id DataAwsWafregionalSubscribedRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_subscribed_rule_group#metric_name DataAwsWafregionalSubscribedRuleGroup#metric_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsWafregionalSubscribedRuleGroup.DataAwsWafregionalSubscribedRuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_subscribed_rule_group#name DataAwsWafregionalSubscribedRuleGroup#name}.

---



