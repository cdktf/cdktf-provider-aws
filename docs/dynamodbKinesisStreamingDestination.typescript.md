# `dynamodbKinesisStreamingDestination` Submodule <a name="`dynamodbKinesisStreamingDestination` Submodule" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbKinesisStreamingDestination <a name="DynamodbKinesisStreamingDestination" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination aws_dynamodb_kinesis_streaming_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.Initializer"></a>

```typescript
import { dynamodbKinesisStreamingDestination } from '@cdktf/provider-aws'

new dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination(scope: Construct, id: string, config: DynamodbKinesisStreamingDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig">DynamodbKinesisStreamingDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig">DynamodbKinesisStreamingDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isConstruct"></a>

```typescript
import { dynamodbKinesisStreamingDestination } from '@cdktf/provider-aws'

dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformElement"></a>

```typescript
import { dynamodbKinesisStreamingDestination } from '@cdktf/provider-aws'

dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformResource"></a>

```typescript
import { dynamodbKinesisStreamingDestination } from '@cdktf/provider-aws'

dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbKinesisStreamingDestinationConfig <a name="DynamodbKinesisStreamingDestinationConfig" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.Initializer"></a>

```typescript
import { dynamodbKinesisStreamingDestination } from '@cdktf/provider-aws'

const dynamodbKinesisStreamingDestinationConfig: dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination#stream_arn DynamodbKinesisStreamingDestination#stream_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination#table_name DynamodbKinesisStreamingDestination#table_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination#id DynamodbKinesisStreamingDestination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination#stream_arn DynamodbKinesisStreamingDestination#stream_arn}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination#table_name DynamodbKinesisStreamingDestination#table_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbKinesisStreamingDestination.DynamodbKinesisStreamingDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination#id DynamodbKinesisStreamingDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



