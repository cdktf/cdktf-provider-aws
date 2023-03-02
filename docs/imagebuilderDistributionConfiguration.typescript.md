# `imagebuilderDistributionConfiguration` Submodule <a name="`imagebuilderDistributionConfiguration` Submodule" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderDistributionConfiguration <a name="ImagebuilderDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig">ImagebuilderDistributionConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig">ImagebuilderDistributionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistribution">putDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDistribution` <a name="putDistribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistribution"></a>

```typescript
public putDistribution(value: IResolvable | ImagebuilderDistributionConfigurationDistribution[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.putDistribution.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateCreated">dateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateUpdated">dateUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distribution">distribution</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList">ImagebuilderDistributionConfigurationDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionInput">distributionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateCreated"></a>

```typescript
public readonly dateCreated: string;
```

- *Type:* string

---

##### `dateUpdated`<sup>Required</sup> <a name="dateUpdated" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.dateUpdated"></a>

```typescript
public readonly dateUpdated: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distribution"></a>

```typescript
public readonly distribution: ImagebuilderDistributionConfigurationDistributionList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList">ImagebuilderDistributionConfigurationDistributionList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributionInput`<sup>Optional</sup> <a name="distributionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.distributionInput"></a>

```typescript
public readonly distributionInput: IResolvable | ImagebuilderDistributionConfigurationDistribution[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderDistributionConfigurationConfig <a name="ImagebuilderDistributionConfigurationConfig" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationConfig: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distribution">distribution</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a>[]</code> | distribution block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#id ImagebuilderDistributionConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags_all ImagebuilderDistributionConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.distribution"></a>

```typescript
public readonly distribution: IResolvable | ImagebuilderDistributionConfigurationDistribution[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a>[]

distribution block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#distribution ImagebuilderDistributionConfiguration#distribution}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#id ImagebuilderDistributionConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags ImagebuilderDistributionConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#tags_all ImagebuilderDistributionConfiguration#tags_all}.

---

### ImagebuilderDistributionConfigurationDistribution <a name="ImagebuilderDistributionConfigurationDistribution" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistribution: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.amiDistributionConfiguration">amiDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | ami_distribution_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.containerDistributionConfiguration">containerDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | container_distribution_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.fastLaunchConfiguration">fastLaunchConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>[]</code> | fast_launch_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.launchTemplateConfiguration">launchTemplateConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>[]</code> | launch_template_configuration block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#region ImagebuilderDistributionConfiguration#region}.

---

##### `amiDistributionConfiguration`<sup>Optional</sup> <a name="amiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.amiDistributionConfiguration"></a>

```typescript
public readonly amiDistributionConfiguration: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

ami_distribution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}

---

##### `containerDistributionConfiguration`<sup>Optional</sup> <a name="containerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.containerDistributionConfiguration"></a>

```typescript
public readonly containerDistributionConfiguration: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

container_distribution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}

---

##### `fastLaunchConfiguration`<sup>Optional</sup> <a name="fastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.fastLaunchConfiguration"></a>

```typescript
public readonly fastLaunchConfiguration: IResolvable | ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>[]

fast_launch_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#fast_launch_configuration ImagebuilderDistributionConfiguration#fast_launch_configuration}

---

##### `launchTemplateConfiguration`<sup>Optional</sup> <a name="launchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.launchTemplateConfiguration"></a>

```typescript
public readonly launchTemplateConfiguration: IResolvable | ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>[]

launch_template_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_configuration ImagebuilderDistributionConfiguration#launch_template_configuration}

---

##### `licenseConfigurationArns`<sup>Optional</sup> <a name="licenseConfigurationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution.property.licenseConfigurationArns"></a>

```typescript
public readonly licenseConfigurationArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}.

---

### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.amiTags">amiTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.launchPermission">launchPermission</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | launch_permission block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.targetAccountIds">targetAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}. |

---

##### `amiTags`<sup>Optional</sup> <a name="amiTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.amiTags"></a>

```typescript
public readonly amiTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#ami_tags ImagebuilderDistributionConfiguration#ami_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}.

---

##### `launchPermission`<sup>Optional</sup> <a name="launchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.launchPermission"></a>

```typescript
public readonly launchPermission: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

launch_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_permission ImagebuilderDistributionConfiguration#launch_permission}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#name ImagebuilderDistributionConfiguration#name}.

---

##### `targetAccountIds`<sup>Optional</sup> <a name="targetAccountIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.property.targetAccountIds"></a>

```typescript
public readonly targetAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}.

---

### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationalUnitArns">organizationalUnitArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationArns">organizationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userGroups">userGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userIds">userIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}. |

---

##### `organizationalUnitArns`<sup>Optional</sup> <a name="organizationalUnitArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationalUnitArns"></a>

```typescript
public readonly organizationalUnitArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organizational_unit_arns ImagebuilderDistributionConfiguration#organizational_unit_arns}.

---

##### `organizationArns`<sup>Optional</sup> <a name="organizationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.organizationArns"></a>

```typescript
public readonly organizationArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#organization_arns ImagebuilderDistributionConfiguration#organization_arns}.

---

##### `userGroups`<sup>Optional</sup> <a name="userGroups" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userGroups"></a>

```typescript
public readonly userGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_groups ImagebuilderDistributionConfiguration#user_groups}.

---

##### `userIds`<sup>Optional</sup> <a name="userIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.property.userIds"></a>

```typescript
public readonly userIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#user_ids ImagebuilderDistributionConfiguration#user_ids}.

---

### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.targetRepository">targetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | target_repository block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.containerTags">containerTags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}. |

---

##### `targetRepository`<sup>Required</sup> <a name="targetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.targetRepository"></a>

```typescript
public readonly targetRepository: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

target_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_repository ImagebuilderDistributionConfiguration#target_repository}

---

##### `containerTags`<sup>Optional</sup> <a name="containerTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#container_tags ImagebuilderDistributionConfiguration#container_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#description ImagebuilderDistributionConfiguration#description}.

---

### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#repository_name ImagebuilderDistributionConfiguration#repository_name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#service ImagebuilderDistributionConfiguration#service}.

---

### ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionFastLaunchConfiguration: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#enabled ImagebuilderDistributionConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.maxParallelLaunches">maxParallelLaunches</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#max_parallel_launches ImagebuilderDistributionConfiguration#max_parallel_launches}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.snapshotConfiguration">snapshotConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | snapshot_configuration block. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#enabled ImagebuilderDistributionConfiguration#enabled}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template ImagebuilderDistributionConfiguration#launch_template}

---

##### `maxParallelLaunches`<sup>Optional</sup> <a name="maxParallelLaunches" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.maxParallelLaunches"></a>

```typescript
public readonly maxParallelLaunches: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#max_parallel_launches ImagebuilderDistributionConfiguration#max_parallel_launches}.

---

##### `snapshotConfiguration`<sup>Optional</sup> <a name="snapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.property.snapshotConfiguration"></a>

```typescript
public readonly snapshotConfiguration: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

snapshot_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#snapshot_configuration ImagebuilderDistributionConfiguration#snapshot_configuration}

---

### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_name ImagebuilderDistributionConfiguration#launch_template_name}.

---

##### `launchTemplateVersion`<sup>Optional</sup> <a name="launchTemplateVersion" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_version ImagebuilderDistributionConfiguration#launch_template_version}.

---

### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.property.targetResourceCount">targetResourceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}. |

---

##### `targetResourceCount`<sup>Optional</sup> <a name="targetResourceCount" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.property.targetResourceCount"></a>

```typescript
public readonly targetResourceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#target_resource_count ImagebuilderDistributionConfiguration#target_resource_count}.

---

### ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration <a name="ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

const imagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration: imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#default ImagebuilderDistributionConfiguration#default}. |

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#launch_template_id ImagebuilderDistributionConfiguration#launch_template_id}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#account_id ImagebuilderDistributionConfiguration#account_id}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration#default ImagebuilderDistributionConfiguration#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationalUnitArns">resetOrganizationalUnitArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationArns">resetOrganizationArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserGroups">resetUserGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserIds">resetUserIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrganizationalUnitArns` <a name="resetOrganizationalUnitArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationalUnitArns"></a>

```typescript
public resetOrganizationalUnitArns(): void
```

##### `resetOrganizationArns` <a name="resetOrganizationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetOrganizationArns"></a>

```typescript
public resetOrganizationArns(): void
```

##### `resetUserGroups` <a name="resetUserGroups" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserGroups"></a>

```typescript
public resetUserGroups(): void
```

##### `resetUserIds` <a name="resetUserIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resetUserIds"></a>

```typescript
public resetUserIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArnsInput">organizationalUnitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArnsInput">organizationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroupsInput">userGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIdsInput">userIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns">organizationalUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns">organizationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups">userGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds">userIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationalUnitArnsInput`<sup>Optional</sup> <a name="organizationalUnitArnsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArnsInput"></a>

```typescript
public readonly organizationalUnitArnsInput: string[];
```

- *Type:* string[]

---

##### `organizationArnsInput`<sup>Optional</sup> <a name="organizationArnsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArnsInput"></a>

```typescript
public readonly organizationArnsInput: string[];
```

- *Type:* string[]

---

##### `userGroupsInput`<sup>Optional</sup> <a name="userGroupsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroupsInput"></a>

```typescript
public readonly userGroupsInput: string[];
```

- *Type:* string[]

---

##### `userIdsInput`<sup>Optional</sup> <a name="userIdsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIdsInput"></a>

```typescript
public readonly userIdsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitArns`<sup>Required</sup> <a name="organizationalUnitArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns"></a>

```typescript
public readonly organizationalUnitArns: string[];
```

- *Type:* string[]

---

##### `organizationArns`<sup>Required</sup> <a name="organizationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns"></a>

```typescript
public readonly organizationArns: string[];
```

- *Type:* string[]

---

##### `userGroups`<sup>Required</sup> <a name="userGroups" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups"></a>

```typescript
public readonly userGroups: string[];
```

- *Type:* string[]

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds"></a>

```typescript
public readonly userIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---


### ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.putLaunchPermission">putLaunchPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetAmiTags">resetAmiTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetLaunchPermission">resetLaunchPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetTargetAccountIds">resetTargetAccountIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchPermission` <a name="putLaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.putLaunchPermission"></a>

```typescript
public putLaunchPermission(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.putLaunchPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---

##### `resetAmiTags` <a name="resetAmiTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetAmiTags"></a>

```typescript
public resetAmiTags(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLaunchPermission` <a name="resetLaunchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetLaunchPermission"></a>

```typescript
public resetLaunchPermission(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTargetAccountIds` <a name="resetTargetAccountIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resetTargetAccountIds"></a>

```typescript
public resetTargetAccountIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission">launchPermission</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTagsInput">amiTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermissionInput">launchPermissionInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput">targetAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags">amiTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds">targetAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchPermission`<sup>Required</sup> <a name="launchPermission" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission"></a>

```typescript
public readonly launchPermission: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference</a>

---

##### `amiTagsInput`<sup>Optional</sup> <a name="amiTagsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTagsInput"></a>

```typescript
public readonly amiTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `launchPermissionInput`<sup>Optional</sup> <a name="launchPermissionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermissionInput"></a>

```typescript
public readonly launchPermissionInput: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetAccountIdsInput`<sup>Optional</sup> <a name="targetAccountIdsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIdsInput"></a>

```typescript
public readonly targetAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `amiTags`<sup>Required</sup> <a name="amiTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```typescript
public readonly amiTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetAccountIds`<sup>Required</sup> <a name="targetAccountIds" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```typescript
public readonly targetAccountIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.putTargetRepository">putTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetContainerTags">resetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetRepository` <a name="putTargetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.putTargetRepository"></a>

```typescript
public putTargetRepository(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.putTargetRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---

##### `resetContainerTags` <a name="resetContainerTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetContainerTags"></a>

```typescript
public resetContainerTags(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository">targetRepository</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTagsInput">containerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepositoryInput">targetRepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags">containerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetRepository`<sup>Required</sup> <a name="targetRepository" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```typescript
public readonly targetRepository: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference</a>

---

##### `containerTagsInput`<sup>Optional</sup> <a name="containerTagsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTagsInput"></a>

```typescript
public readonly containerTagsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `targetRepositoryInput`<sup>Optional</sup> <a name="targetRepositoryInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepositoryInput"></a>

```typescript
public readonly targetRepositoryInput: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---

##### `containerTags`<sup>Required</sup> <a name="containerTags" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference <a name="ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateVersion">resetLaunchTemplateVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```typescript
public resetLaunchTemplateId(): void
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```typescript
public resetLaunchTemplateName(): void
```

##### `resetLaunchTemplateVersion` <a name="resetLaunchTemplateVersion" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resetLaunchTemplateVersion"></a>

```typescript
public resetLaunchTemplateVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersionInput">launchTemplateVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion">launchTemplateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```typescript
public readonly launchTemplateIdInput: string;
```

- *Type:* string

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```typescript
public readonly launchTemplateNameInput: string;
```

- *Type:* string

---

##### `launchTemplateVersionInput`<sup>Optional</sup> <a name="launchTemplateVersionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersionInput"></a>

```typescript
public readonly launchTemplateVersionInput: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `launchTemplateVersion`<sup>Required</sup> <a name="launchTemplateVersion" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```typescript
public readonly launchTemplateVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get"></a>

```typescript
public get(index: number): ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>[]

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putSnapshotConfiguration">putSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetMaxParallelLaunches">resetMaxParallelLaunches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetSnapshotConfiguration">resetSnapshotConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---

##### `putSnapshotConfiguration` <a name="putSnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putSnapshotConfiguration"></a>

```typescript
public putSnapshotConfiguration(value: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.putSnapshotConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetLaunchTemplate"></a>

```typescript
public resetLaunchTemplate(): void
```

##### `resetMaxParallelLaunches` <a name="resetMaxParallelLaunches" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetMaxParallelLaunches"></a>

```typescript
public resetMaxParallelLaunches(): void
```

##### `resetSnapshotConfiguration` <a name="resetSnapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resetSnapshotConfiguration"></a>

```typescript
public resetSnapshotConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration">snapshotConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunchesInput">maxParallelLaunchesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfigurationInput">snapshotConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches">maxParallelLaunches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference</a>

---

##### `snapshotConfiguration`<sup>Required</sup> <a name="snapshotConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration"></a>

```typescript
public readonly snapshotConfiguration: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---

##### `maxParallelLaunchesInput`<sup>Optional</sup> <a name="maxParallelLaunchesInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunchesInput"></a>

```typescript
public readonly maxParallelLaunchesInput: number;
```

- *Type:* number

---

##### `snapshotConfigurationInput`<sup>Optional</sup> <a name="snapshotConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfigurationInput"></a>

```typescript
public readonly snapshotConfigurationInput: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxParallelLaunches`<sup>Required</sup> <a name="maxParallelLaunches" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches"></a>

```typescript
public readonly maxParallelLaunches: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a> | cdktf.IResolvable

---


### ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resetTargetResourceCount">resetTargetResourceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetResourceCount` <a name="resetTargetResourceCount" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resetTargetResourceCount"></a>

```typescript
public resetTargetResourceCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCountInput">targetResourceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount">targetResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetResourceCountInput`<sup>Optional</sup> <a name="targetResourceCountInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCountInput"></a>

```typescript
public readonly targetResourceCountInput: number;
```

- *Type:* number

---

##### `targetResourceCount`<sup>Required</sup> <a name="targetResourceCount" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```typescript
public readonly targetResourceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---


### ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList <a name="ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get"></a>

```typescript
public get(index: number): ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>[]

---


### ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference <a name="ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateIdInput"></a>

```typescript
public readonly launchTemplateIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a> | cdktf.IResolvable

---


### ImagebuilderDistributionConfigurationDistributionList <a name="ImagebuilderDistributionConfigurationDistributionList" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.get"></a>

```typescript
public get(index: number): ImagebuilderDistributionConfigurationDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderDistributionConfigurationDistribution[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a>[]

---


### ImagebuilderDistributionConfigurationDistributionOutputReference <a name="ImagebuilderDistributionConfigurationDistributionOutputReference" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer"></a>

```typescript
import { imagebuilderDistributionConfiguration } from '@cdktf/provider-aws'

new imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putAmiDistributionConfiguration">putAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putContainerDistributionConfiguration">putContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putFastLaunchConfiguration">putFastLaunchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putLaunchTemplateConfiguration">putLaunchTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetAmiDistributionConfiguration">resetAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetContainerDistributionConfiguration">resetContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetFastLaunchConfiguration">resetFastLaunchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLaunchTemplateConfiguration">resetLaunchTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLicenseConfigurationArns">resetLicenseConfigurationArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmiDistributionConfiguration` <a name="putAmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putAmiDistributionConfiguration"></a>

```typescript
public putAmiDistributionConfiguration(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putAmiDistributionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---

##### `putContainerDistributionConfiguration` <a name="putContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putContainerDistributionConfiguration"></a>

```typescript
public putContainerDistributionConfiguration(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putContainerDistributionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---

##### `putFastLaunchConfiguration` <a name="putFastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putFastLaunchConfiguration"></a>

```typescript
public putFastLaunchConfiguration(value: IResolvable | ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putFastLaunchConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>[]

---

##### `putLaunchTemplateConfiguration` <a name="putLaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putLaunchTemplateConfiguration"></a>

```typescript
public putLaunchTemplateConfiguration(value: IResolvable | ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.putLaunchTemplateConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>[]

---

##### `resetAmiDistributionConfiguration` <a name="resetAmiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetAmiDistributionConfiguration"></a>

```typescript
public resetAmiDistributionConfiguration(): void
```

##### `resetContainerDistributionConfiguration` <a name="resetContainerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetContainerDistributionConfiguration"></a>

```typescript
public resetContainerDistributionConfiguration(): void
```

##### `resetFastLaunchConfiguration` <a name="resetFastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetFastLaunchConfiguration"></a>

```typescript
public resetFastLaunchConfiguration(): void
```

##### `resetLaunchTemplateConfiguration` <a name="resetLaunchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLaunchTemplateConfiguration"></a>

```typescript
public resetLaunchTemplateConfiguration(): void
```

##### `resetLicenseConfigurationArns` <a name="resetLicenseConfigurationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.resetLicenseConfigurationArns"></a>

```typescript
public resetLicenseConfigurationArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration">amiDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration">containerDistributionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration">fastLaunchConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration">launchTemplateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfigurationInput">amiDistributionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfigurationInput">containerDistributionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfigurationInput">fastLaunchConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfigurationInput">launchTemplateConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArnsInput">licenseConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amiDistributionConfiguration`<sup>Required</sup> <a name="amiDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration"></a>

```typescript
public readonly amiDistributionConfiguration: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference</a>

---

##### `containerDistributionConfiguration`<sup>Required</sup> <a name="containerDistributionConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration"></a>

```typescript
public readonly containerDistributionConfiguration: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference</a>

---

##### `fastLaunchConfiguration`<sup>Required</sup> <a name="fastLaunchConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration"></a>

```typescript
public readonly fastLaunchConfiguration: ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">ImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a>

---

##### `launchTemplateConfiguration`<sup>Required</sup> <a name="launchTemplateConfiguration" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration"></a>

```typescript
public readonly launchTemplateConfiguration: ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a>

---

##### `amiDistributionConfigurationInput`<sup>Optional</sup> <a name="amiDistributionConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfigurationInput"></a>

```typescript
public readonly amiDistributionConfigurationInput: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---

##### `containerDistributionConfigurationInput`<sup>Optional</sup> <a name="containerDistributionConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfigurationInput"></a>

```typescript
public readonly containerDistributionConfigurationInput: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---

##### `fastLaunchConfigurationInput`<sup>Optional</sup> <a name="fastLaunchConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfigurationInput"></a>

```typescript
public readonly fastLaunchConfigurationInput: IResolvable | ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">ImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>[]

---

##### `launchTemplateConfigurationInput`<sup>Optional</sup> <a name="launchTemplateConfigurationInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfigurationInput"></a>

```typescript
public readonly launchTemplateConfigurationInput: IResolvable | ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">ImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>[]

---

##### `licenseConfigurationArnsInput`<sup>Optional</sup> <a name="licenseConfigurationArnsInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArnsInput"></a>

```typescript
public readonly licenseConfigurationArnsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `licenseConfigurationArns`<sup>Required</sup> <a name="licenseConfigurationArns" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns"></a>

```typescript
public readonly licenseConfigurationArns: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderDistributionConfigurationDistribution | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderDistributionConfiguration.ImagebuilderDistributionConfigurationDistribution">ImagebuilderDistributionConfigurationDistribution</a> | cdktf.IResolvable

---



