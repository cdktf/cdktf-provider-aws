# `sqsQueueRedriveAllowPolicy` Submodule <a name="`sqsQueueRedriveAllowPolicy` Submodule" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueueRedriveAllowPolicy <a name="SqsQueueRedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy aws_sqs_queue_redrive_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer"></a>

```typescript
import { sqsQueueRedriveAllowPolicy } from '@cdktf/provider-aws'

new sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy(scope: Construct, id: string, config: SqsQueueRedriveAllowPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig">SqsQueueRedriveAllowPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig">SqsQueueRedriveAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isConstruct"></a>

```typescript
import { sqsQueueRedriveAllowPolicy } from '@cdktf/provider-aws'

sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformElement"></a>

```typescript
import { sqsQueueRedriveAllowPolicy } from '@cdktf/provider-aws'

sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformResource"></a>

```typescript
import { sqsQueueRedriveAllowPolicy } from '@cdktf/provider-aws'

sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicyInput">redriveAllowPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `redriveAllowPolicyInput`<sup>Optional</sup> <a name="redriveAllowPolicyInput" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicyInput"></a>

```typescript
public readonly redriveAllowPolicyInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `redriveAllowPolicy`<sup>Required</sup> <a name="redriveAllowPolicy" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueRedriveAllowPolicyConfig <a name="SqsQueueRedriveAllowPolicyConfig" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.Initializer"></a>

```typescript
import { sqsQueueRedriveAllowPolicy } from '@cdktf/provider-aws'

const sqsQueueRedriveAllowPolicyConfig: sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#queue_url SqsQueueRedriveAllowPolicy#queue_url}. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#redrive_allow_policy SqsQueueRedriveAllowPolicy#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#id SqsQueueRedriveAllowPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#queue_url SqsQueueRedriveAllowPolicy#queue_url}.

---

##### `redriveAllowPolicy`<sup>Required</sup> <a name="redriveAllowPolicy" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#redrive_allow_policy SqsQueueRedriveAllowPolicy#redrive_allow_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sqsQueueRedriveAllowPolicy.SqsQueueRedriveAllowPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#id SqsQueueRedriveAllowPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



