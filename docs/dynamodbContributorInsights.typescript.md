# `dynamodbContributorInsights` Submodule <a name="`dynamodbContributorInsights` Submodule" id="@cdktf/provider-aws.dynamodbContributorInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbContributorInsights <a name="DynamodbContributorInsights" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights aws_dynamodb_contributor_insights}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.Initializer"></a>

```typescript
import { dynamodbContributorInsights } from '@cdktf/provider-aws'

new dynamodbContributorInsights.DynamodbContributorInsights(scope: Construct, id: string, config: DynamodbContributorInsightsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig">DynamodbContributorInsightsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig">DynamodbContributorInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.putTimeouts"></a>

```typescript
public putTimeouts(value: DynamodbContributorInsightsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts">DynamodbContributorInsightsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetIndexName"></a>

```typescript
public resetIndexName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isConstruct"></a>

```typescript
import { dynamodbContributorInsights } from '@cdktf/provider-aws'

dynamodbContributorInsights.DynamodbContributorInsights.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isTerraformElement"></a>

```typescript
import { dynamodbContributorInsights } from '@cdktf/provider-aws'

dynamodbContributorInsights.DynamodbContributorInsights.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isTerraformResource"></a>

```typescript
import { dynamodbContributorInsights } from '@cdktf/provider-aws'

dynamodbContributorInsights.DynamodbContributorInsights.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference">DynamodbContributorInsightsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts">DynamodbContributorInsightsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.timeouts"></a>

```typescript
public readonly timeouts: DynamodbContributorInsightsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference">DynamodbContributorInsightsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DynamodbContributorInsightsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts">DynamodbContributorInsightsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsights.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbContributorInsightsConfig <a name="DynamodbContributorInsightsConfig" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.Initializer"></a>

```typescript
import { dynamodbContributorInsights } from '@cdktf/provider-aws'

const dynamodbContributorInsightsConfig: dynamodbContributorInsights.DynamodbContributorInsightsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#table_name DynamodbContributorInsights#table_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#id DynamodbContributorInsights#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#index_name DynamodbContributorInsights#index_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts">DynamodbContributorInsightsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#table_name DynamodbContributorInsights#table_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#id DynamodbContributorInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#index_name DynamodbContributorInsights#index_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DynamodbContributorInsightsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts">DynamodbContributorInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#timeouts DynamodbContributorInsights#timeouts}

---

### DynamodbContributorInsightsTimeouts <a name="DynamodbContributorInsightsTimeouts" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts.Initializer"></a>

```typescript
import { dynamodbContributorInsights } from '@cdktf/provider-aws'

const dynamodbContributorInsightsTimeouts: dynamodbContributorInsights.DynamodbContributorInsightsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#create DynamodbContributorInsights#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#delete DynamodbContributorInsights#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#create DynamodbContributorInsights#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_contributor_insights#delete DynamodbContributorInsights#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbContributorInsightsTimeoutsOutputReference <a name="DynamodbContributorInsightsTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dynamodbContributorInsights } from '@cdktf/provider-aws'

new dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts">DynamodbContributorInsightsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynamodbContributorInsightsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbContributorInsights.DynamodbContributorInsightsTimeouts">DynamodbContributorInsightsTimeouts</a> | cdktf.IResolvable

---



