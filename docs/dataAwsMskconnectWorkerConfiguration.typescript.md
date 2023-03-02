# `dataAwsMskconnectWorkerConfiguration` Submodule <a name="`dataAwsMskconnectWorkerConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskconnectWorkerConfiguration <a name="DataAwsMskconnectWorkerConfiguration" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/mskconnect_worker_configuration aws_mskconnect_worker_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.Initializer"></a>

```typescript
import { dataAwsMskconnectWorkerConfiguration } from '@cdktf/provider-aws'

new dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration(scope: Construct, id: string, config: DataAwsMskconnectWorkerConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig">DataAwsMskconnectWorkerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig">DataAwsMskconnectWorkerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isConstruct"></a>

```typescript
import { dataAwsMskconnectWorkerConfiguration } from '@cdktf/provider-aws'

dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsMskconnectWorkerConfiguration } from '@cdktf/provider-aws'

dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsMskconnectWorkerConfiguration } from '@cdktf/provider-aws'

dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.latestRevision">latestRevision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.propertiesFileContent">propertiesFileContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.latestRevision"></a>

```typescript
public readonly latestRevision: number;
```

- *Type:* number

---

##### `propertiesFileContent`<sup>Required</sup> <a name="propertiesFileContent" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.propertiesFileContent"></a>

```typescript
public readonly propertiesFileContent: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskconnectWorkerConfigurationConfig <a name="DataAwsMskconnectWorkerConfigurationConfig" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsMskconnectWorkerConfiguration } from '@cdktf/provider-aws'

const dataAwsMskconnectWorkerConfigurationConfig: dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mskconnect_worker_configuration#name DataAwsMskconnectWorkerConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mskconnect_worker_configuration#id DataAwsMskconnectWorkerConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mskconnect_worker_configuration#name DataAwsMskconnectWorkerConfiguration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskconnectWorkerConfiguration.DataAwsMskconnectWorkerConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mskconnect_worker_configuration#id DataAwsMskconnectWorkerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



