# `dataAwsLocationTrackerAssociation` Submodule <a name="`dataAwsLocationTrackerAssociation` Submodule" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLocationTrackerAssociation <a name="DataAwsLocationTrackerAssociation" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/location_tracker_association aws_location_tracker_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.Initializer"></a>

```typescript
import { dataAwsLocationTrackerAssociation } from '@cdktf/provider-aws'

new dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation(scope: Construct, id: string, config: DataAwsLocationTrackerAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig">DataAwsLocationTrackerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig">DataAwsLocationTrackerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isConstruct"></a>

```typescript
import { dataAwsLocationTrackerAssociation } from '@cdktf/provider-aws'

dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformElement"></a>

```typescript
import { dataAwsLocationTrackerAssociation } from '@cdktf/provider-aws'

dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsLocationTrackerAssociation } from '@cdktf/provider-aws'

dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.consumerArnInput">consumerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.trackerNameInput">trackerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.consumerArn">consumerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.trackerName">trackerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `consumerArnInput`<sup>Optional</sup> <a name="consumerArnInput" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.consumerArnInput"></a>

```typescript
public readonly consumerArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `trackerNameInput`<sup>Optional</sup> <a name="trackerNameInput" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.trackerNameInput"></a>

```typescript
public readonly trackerNameInput: string;
```

- *Type:* string

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `trackerName`<sup>Required</sup> <a name="trackerName" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.trackerName"></a>

```typescript
public readonly trackerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLocationTrackerAssociationConfig <a name="DataAwsLocationTrackerAssociationConfig" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.Initializer"></a>

```typescript
import { dataAwsLocationTrackerAssociation } from '@cdktf/provider-aws'

const dataAwsLocationTrackerAssociationConfig: dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.consumerArn">consumerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_tracker_association#consumer_arn DataAwsLocationTrackerAssociation#consumer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.trackerName">trackerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_tracker_association#tracker_name DataAwsLocationTrackerAssociation#tracker_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_tracker_association#id DataAwsLocationTrackerAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.consumerArn"></a>

```typescript
public readonly consumerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_tracker_association#consumer_arn DataAwsLocationTrackerAssociation#consumer_arn}.

---

##### `trackerName`<sup>Required</sup> <a name="trackerName" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.trackerName"></a>

```typescript
public readonly trackerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_tracker_association#tracker_name DataAwsLocationTrackerAssociation#tracker_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLocationTrackerAssociation.DataAwsLocationTrackerAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_tracker_association#id DataAwsLocationTrackerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



