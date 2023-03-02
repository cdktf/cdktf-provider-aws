# `dataAwsImagebuilderDistributionConfiguration` Submodule <a name="`dataAwsImagebuilderDistributionConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderDistributionConfiguration <a name="DataAwsImagebuilderDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration(scope: Construct, id: string, config: DataAwsImagebuilderDistributionConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig">DataAwsImagebuilderDistributionConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig">DataAwsImagebuilderDistributionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isConstruct"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateCreated">dateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateUpdated">dateUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.distribution">distribution</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList">DataAwsImagebuilderDistributionConfigurationDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateCreated"></a>

```typescript
public readonly dateCreated: string;
```

- *Type:* string

---

##### `dateUpdated`<sup>Required</sup> <a name="dateUpdated" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateUpdated"></a>

```typescript
public readonly dateUpdated: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.distribution"></a>

```typescript
public readonly distribution: DataAwsImagebuilderDistributionConfigurationDistributionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList">DataAwsImagebuilderDistributionConfigurationDistributionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderDistributionConfigurationConfig <a name="DataAwsImagebuilderDistributionConfigurationConfig" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationConfig: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}.

---

### DataAwsImagebuilderDistributionConfigurationDistribution <a name="DataAwsImagebuilderDistributionConfigurationDistribution" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistribution: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration = { ... }
```


### DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const dataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration: dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns">organizationalUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns">organizationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups">userGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds">userIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationalUnitArns`<sup>Required</sup> <a name="organizationalUnitArns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns"></a>

```typescript
public readonly organizationalUnitArns: string[];
```

- *Type:* string[]

---

##### `organizationArns`<sup>Required</sup> <a name="organizationArns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns"></a>

```typescript
public readonly organizationArns: string[];
```

- *Type:* string[]

---

##### `userGroups`<sup>Required</sup> <a name="userGroups" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups"></a>

```typescript
public readonly userGroups: string[];
```

- *Type:* string[]

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds"></a>

```typescript
public readonly userIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags">amiTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission">launchPermission</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds">targetAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amiTags`<sup>Required</sup> <a name="amiTags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```typescript
public readonly amiTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `launchPermission`<sup>Required</sup> <a name="launchPermission" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission"></a>

```typescript
public readonly launchPermission: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetAccountIds`<sup>Required</sup> <a name="targetAccountIds" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```typescript
public readonly targetAccountIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags">containerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository">targetRepository</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerTags`<sup>Required</sup> <a name="containerTags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `targetRepository`<sup>Required</sup> <a name="targetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```typescript
public readonly targetRepository: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `launchTemplateVersion`<sup>Required</sup> <a name="launchTemplateVersion" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches">maxParallelLaunches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration">snapshotConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList</a>

---

##### `maxParallelLaunches`<sup>Required</sup> <a name="maxParallelLaunches" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches"></a>

```typescript
public readonly maxParallelLaunches: number;
```

- *Type:* number

---

##### `snapshotConfiguration`<sup>Required</sup> <a name="snapshotConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration"></a>

```typescript
public readonly snapshotConfiguration: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount">targetResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetResourceCount`<sup>Required</sup> <a name="targetResourceCount" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```typescript
public readonly targetResourceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionList <a name="DataAwsImagebuilderDistributionConfigurationDistributionList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderDistributionConfigurationDistributionOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration">amiDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration">containerDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration">fastLaunchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration">launchTemplateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution">DataAwsImagebuilderDistributionConfigurationDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amiDistributionConfiguration`<sup>Required</sup> <a name="amiDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration"></a>

```typescript
public readonly amiDistributionConfiguration: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList</a>

---

##### `containerDistributionConfiguration`<sup>Required</sup> <a name="containerDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration"></a>

```typescript
public readonly containerDistributionConfiguration: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList</a>

---

##### `fastLaunchConfiguration`<sup>Required</sup> <a name="fastLaunchConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration"></a>

```typescript
public readonly fastLaunchConfiguration: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a>

---

##### `launchTemplateConfiguration`<sup>Required</sup> <a name="launchTemplateConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration"></a>

```typescript
public readonly launchTemplateConfiguration: DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a>

---

##### `licenseConfigurationArns`<sup>Required</sup> <a name="licenseConfigurationArns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns"></a>

```typescript
public readonly licenseConfigurationArns: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderDistributionConfigurationDistribution;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution">DataAwsImagebuilderDistributionConfigurationDistribution</a>

---



