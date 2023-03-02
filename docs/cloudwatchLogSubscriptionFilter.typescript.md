# `cloudwatchLogSubscriptionFilter` Submodule <a name="`cloudwatchLogSubscriptionFilter` Submodule" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogSubscriptionFilter <a name="CloudwatchLogSubscriptionFilter" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter aws_cloudwatch_log_subscription_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer"></a>

```typescript
import { cloudwatchLogSubscriptionFilter } from '@cdktf/provider-aws'

new cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter(scope: Construct, id: string, config: CloudwatchLogSubscriptionFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig">CloudwatchLogSubscriptionFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig">CloudwatchLogSubscriptionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetDistribution">resetDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDistribution` <a name="resetDistribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetDistribution"></a>

```typescript
public resetDistribution(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct"></a>

```typescript
import { cloudwatchLogSubscriptionFilter } from '@cdktf/provider-aws'

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement"></a>

```typescript
import { cloudwatchLogSubscriptionFilter } from '@cdktf/provider-aws'

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource"></a>

```typescript
import { cloudwatchLogSubscriptionFilter } from '@cdktf/provider-aws'

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distributionInput">distributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPatternInput">filterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPattern">filterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `distributionInput`<sup>Optional</sup> <a name="distributionInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distributionInput"></a>

```typescript
public readonly distributionInput: string;
```

- *Type:* string

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPatternInput"></a>

```typescript
public readonly filterPatternInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogSubscriptionFilterConfig <a name="CloudwatchLogSubscriptionFilterConfig" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.Initializer"></a>

```typescript
import { cloudwatchLogSubscriptionFilter } from '@cdktf/provider-aws'

const cloudwatchLogSubscriptionFilterConfig: cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.filterPattern">filterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.distribution">distribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}.

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}.

---

##### `distribution`<sup>Optional</sup> <a name="distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}.

---



