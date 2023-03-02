# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktf/provider-aws.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy aws_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

new batchSchedulingPolicy.BatchSchedulingPolicy(scope: Construct, id: string, config: BatchSchedulingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy">putFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy">resetFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFairSharePolicy` <a name="putFairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy"></a>

```typescript
public putFairSharePolicy(value: BatchSchedulingPolicyFairSharePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---

##### `resetFairSharePolicy` <a name="resetFairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy"></a>

```typescript
public resetFairSharePolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy">fairSharePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput">fairSharePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fairSharePolicy`<sup>Required</sup> <a name="fairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy"></a>

```typescript
public readonly fairSharePolicy: BatchSchedulingPolicyFairSharePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a>

---

##### `fairSharePolicyInput`<sup>Optional</sup> <a name="fairSharePolicyInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput"></a>

```typescript
public readonly fairSharePolicyInput: BatchSchedulingPolicyFairSharePolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

const batchSchedulingPolicyConfig: batchSchedulingPolicy.BatchSchedulingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy">fairSharePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | fair_share_policy block. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}.

---

##### `fairSharePolicy`<sup>Optional</sup> <a name="fairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy"></a>

```typescript
public readonly fairSharePolicy: BatchSchedulingPolicyFairSharePolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

fair_share_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}.

---

### BatchSchedulingPolicyFairSharePolicy <a name="BatchSchedulingPolicyFairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

const batchSchedulingPolicyFairSharePolicy: batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation">computeReservation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds">shareDecaySeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution">shareDistribution</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]</code> | share_distribution block. |

---

##### `computeReservation`<sup>Optional</sup> <a name="computeReservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation"></a>

```typescript
public readonly computeReservation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `shareDecaySeconds`<sup>Optional</sup> <a name="shareDecaySeconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds"></a>

```typescript
public readonly shareDecaySeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `shareDistribution`<sup>Optional</sup> <a name="shareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution"></a>

```typescript
public readonly shareDistribution: IResolvable | BatchSchedulingPolicyFairSharePolicyShareDistribution[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

share_distribution block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairSharePolicyShareDistribution <a name="BatchSchedulingPolicyFairSharePolicyShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

const batchSchedulingPolicyFairSharePolicyShareDistribution: batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier">shareIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor">weightFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `shareIdentifier`<sup>Required</sup> <a name="shareIdentifier" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier"></a>

```typescript
public readonly shareIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `weightFactor`<sup>Optional</sup> <a name="weightFactor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor"></a>

```typescript
public readonly weightFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairSharePolicyOutputReference <a name="BatchSchedulingPolicyFairSharePolicyOutputReference" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

new batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution">putShareDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation">resetComputeReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds">resetShareDecaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution">resetShareDistribution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShareDistribution` <a name="putShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution"></a>

```typescript
public putShareDistribution(value: IResolvable | BatchSchedulingPolicyFairSharePolicyShareDistribution[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

---

##### `resetComputeReservation` <a name="resetComputeReservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation"></a>

```typescript
public resetComputeReservation(): void
```

##### `resetShareDecaySeconds` <a name="resetShareDecaySeconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds"></a>

```typescript
public resetShareDecaySeconds(): void
```

##### `resetShareDistribution` <a name="resetShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution"></a>

```typescript
public resetShareDistribution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution">shareDistribution</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput">computeReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput">shareDecaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput">shareDistributionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation">computeReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds">shareDecaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shareDistribution`<sup>Required</sup> <a name="shareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution"></a>

```typescript
public readonly shareDistribution: BatchSchedulingPolicyFairSharePolicyShareDistributionList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a>

---

##### `computeReservationInput`<sup>Optional</sup> <a name="computeReservationInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput"></a>

```typescript
public readonly computeReservationInput: number;
```

- *Type:* number

---

##### `shareDecaySecondsInput`<sup>Optional</sup> <a name="shareDecaySecondsInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```typescript
public readonly shareDecaySecondsInput: number;
```

- *Type:* number

---

##### `shareDistributionInput`<sup>Optional</sup> <a name="shareDistributionInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput"></a>

```typescript
public readonly shareDistributionInput: IResolvable | BatchSchedulingPolicyFairSharePolicyShareDistribution[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

---

##### `computeReservation`<sup>Required</sup> <a name="computeReservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation"></a>

```typescript
public readonly computeReservation: number;
```

- *Type:* number

---

##### `shareDecaySeconds`<sup>Required</sup> <a name="shareDecaySeconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds"></a>

```typescript
public readonly shareDecaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchSchedulingPolicyFairSharePolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionList" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

new batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get"></a>

```typescript
public get(index: number): BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchSchedulingPolicyFairSharePolicyShareDistribution[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a>[]

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktf/provider-aws'

new batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor">resetWeightFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeightFactor` <a name="resetWeightFactor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```typescript
public resetWeightFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput">shareIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput">weightFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier">shareIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor">weightFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shareIdentifierInput`<sup>Optional</sup> <a name="shareIdentifierInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```typescript
public readonly shareIdentifierInput: string;
```

- *Type:* string

---

##### `weightFactorInput`<sup>Optional</sup> <a name="weightFactorInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```typescript
public readonly weightFactorInput: number;
```

- *Type:* number

---

##### `shareIdentifier`<sup>Required</sup> <a name="shareIdentifier" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```typescript
public readonly shareIdentifier: string;
```

- *Type:* string

---

##### `weightFactor`<sup>Required</sup> <a name="weightFactor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```typescript
public readonly weightFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchSchedulingPolicyFairSharePolicyShareDistribution | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution">BatchSchedulingPolicyFairSharePolicyShareDistribution</a> | cdktf.IResolvable

---



