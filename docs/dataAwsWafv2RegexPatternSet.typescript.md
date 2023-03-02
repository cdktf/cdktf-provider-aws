# `dataAwsWafv2RegexPatternSet` Submodule <a name="`dataAwsWafv2RegexPatternSet` Submodule" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWafv2RegexPatternSet <a name="DataAwsWafv2RegexPatternSet" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.Initializer"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

new dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet(scope: Construct, id: string, config: DataAwsWafv2RegexPatternSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig">DataAwsWafv2RegexPatternSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig">DataAwsWafv2RegexPatternSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isConstruct"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformElement"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformDataSource"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.regularExpression">regularExpression</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList">DataAwsWafv2RegexPatternSetRegularExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.regularExpression"></a>

```typescript
public readonly regularExpression: DataAwsWafv2RegexPatternSetRegularExpressionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList">DataAwsWafv2RegexPatternSetRegularExpressionList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWafv2RegexPatternSetConfig <a name="DataAwsWafv2RegexPatternSetConfig" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.Initializer"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

const dataAwsWafv2RegexPatternSetConfig: dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set#name DataAwsWafv2RegexPatternSet#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set#scope DataAwsWafv2RegexPatternSet#scope}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set#id DataAwsWafv2RegexPatternSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set#name DataAwsWafv2RegexPatternSet#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set#scope DataAwsWafv2RegexPatternSet#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set#id DataAwsWafv2RegexPatternSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsWafv2RegexPatternSetRegularExpression <a name="DataAwsWafv2RegexPatternSetRegularExpression" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpression.Initializer"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

const dataAwsWafv2RegexPatternSetRegularExpression: dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpression = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWafv2RegexPatternSetRegularExpressionList <a name="DataAwsWafv2RegexPatternSetRegularExpressionList" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.Initializer"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

new dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.get"></a>

```typescript
public get(index: number): DataAwsWafv2RegexPatternSetRegularExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsWafv2RegexPatternSetRegularExpressionOutputReference <a name="DataAwsWafv2RegexPatternSetRegularExpressionOutputReference" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsWafv2RegexPatternSet } from '@cdktf/provider-aws'

new dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.regexString">regexString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpression">DataAwsWafv2RegexPatternSetRegularExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexString`<sup>Required</sup> <a name="regexString" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.regexString"></a>

```typescript
public readonly regexString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsWafv2RegexPatternSetRegularExpression;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWafv2RegexPatternSet.DataAwsWafv2RegexPatternSetRegularExpression">DataAwsWafv2RegexPatternSetRegularExpression</a>

---



