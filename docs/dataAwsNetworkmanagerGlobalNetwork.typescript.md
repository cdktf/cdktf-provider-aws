# `dataAwsNetworkmanagerGlobalNetwork` Submodule <a name="`dataAwsNetworkmanagerGlobalNetwork` Submodule" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkmanagerGlobalNetwork <a name="DataAwsNetworkmanagerGlobalNetwork" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_global_network aws_networkmanager_global_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.Initializer"></a>

```typescript
import { dataAwsNetworkmanagerGlobalNetwork } from '@cdktf/provider-aws'

new dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork(scope: Construct, id: string, config: DataAwsNetworkmanagerGlobalNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig">DataAwsNetworkmanagerGlobalNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig">DataAwsNetworkmanagerGlobalNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isConstruct"></a>

```typescript
import { dataAwsNetworkmanagerGlobalNetwork } from '@cdktf/provider-aws'

dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformElement"></a>

```typescript
import { dataAwsNetworkmanagerGlobalNetwork } from '@cdktf/provider-aws'

dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformDataSource"></a>

```typescript
import { dataAwsNetworkmanagerGlobalNetwork } from '@cdktf/provider-aws'

dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkmanagerGlobalNetworkConfig <a name="DataAwsNetworkmanagerGlobalNetworkConfig" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.Initializer"></a>

```typescript
import { dataAwsNetworkmanagerGlobalNetwork } from '@cdktf/provider-aws'

const dataAwsNetworkmanagerGlobalNetworkConfig: dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_global_network#global_network_id DataAwsNetworkmanagerGlobalNetwork#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_global_network#id DataAwsNetworkmanagerGlobalNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_global_network#tags DataAwsNetworkmanagerGlobalNetwork#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_global_network#global_network_id DataAwsNetworkmanagerGlobalNetwork#global_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_global_network#id DataAwsNetworkmanagerGlobalNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerGlobalNetwork.DataAwsNetworkmanagerGlobalNetworkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_global_network#tags DataAwsNetworkmanagerGlobalNetwork#tags}.

---



