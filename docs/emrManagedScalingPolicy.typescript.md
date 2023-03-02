# `emrManagedScalingPolicy` Submodule <a name="`emrManagedScalingPolicy` Submodule" id="@cdktf/provider-aws.emrManagedScalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrManagedScalingPolicy <a name="EmrManagedScalingPolicy" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy aws_emr_managed_scaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

new emrManagedScalingPolicy.EmrManagedScalingPolicy(scope: Construct, id: string, config: EmrManagedScalingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig">EmrManagedScalingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig">EmrManagedScalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits">putComputeLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putComputeLimits` <a name="putComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits"></a>

```typescript
public putComputeLimits(value: IResolvable | EmrManagedScalingPolicyComputeLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.putComputeLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimits">computeLimits</a></code> | <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList">EmrManagedScalingPolicyComputeLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimitsInput">computeLimitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeLimits`<sup>Required</sup> <a name="computeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimits"></a>

```typescript
public readonly computeLimits: EmrManagedScalingPolicyComputeLimitsList;
```

- *Type:* <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList">EmrManagedScalingPolicyComputeLimitsList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `computeLimitsInput`<sup>Optional</sup> <a name="computeLimitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.computeLimitsInput"></a>

```typescript
public readonly computeLimitsInput: IResolvable | EmrManagedScalingPolicyComputeLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrManagedScalingPolicyComputeLimits <a name="EmrManagedScalingPolicyComputeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.Initializer"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

const emrManagedScalingPolicyComputeLimits: emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCapacityUnits">maximumCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.minimumCapacityUnits">minimumCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.unitType">unitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCoreCapacityUnits">maximumCoreCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumOndemandCapacityUnits">maximumOndemandCapacityUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}. |

---

##### `maximumCapacityUnits`<sup>Required</sup> <a name="maximumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCapacityUnits"></a>

```typescript
public readonly maximumCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}.

---

##### `minimumCapacityUnits`<sup>Required</sup> <a name="minimumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.minimumCapacityUnits"></a>

```typescript
public readonly minimumCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}.

---

##### `unitType`<sup>Required</sup> <a name="unitType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.unitType"></a>

```typescript
public readonly unitType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}.

---

##### `maximumCoreCapacityUnits`<sup>Optional</sup> <a name="maximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumCoreCapacityUnits"></a>

```typescript
public readonly maximumCoreCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}.

---

##### `maximumOndemandCapacityUnits`<sup>Optional</sup> <a name="maximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits.property.maximumOndemandCapacityUnits"></a>

```typescript
public readonly maximumOndemandCapacityUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}.

---

### EmrManagedScalingPolicyConfig <a name="EmrManagedScalingPolicyConfig" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.Initializer"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

const emrManagedScalingPolicyConfig: emrManagedScalingPolicy.EmrManagedScalingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.computeLimits">computeLimits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>[]</code> | compute_limits block. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}.

---

##### `computeLimits`<sup>Required</sup> <a name="computeLimits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.computeLimits"></a>

```typescript
public readonly computeLimits: IResolvable | EmrManagedScalingPolicyComputeLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>[]

compute_limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#compute_limits EmrManagedScalingPolicy#compute_limits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrManagedScalingPolicyComputeLimitsList <a name="EmrManagedScalingPolicyComputeLimitsList" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

new emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get"></a>

```typescript
public get(index: number): EmrManagedScalingPolicyComputeLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrManagedScalingPolicyComputeLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a>[]

---


### EmrManagedScalingPolicyComputeLimitsOutputReference <a name="EmrManagedScalingPolicyComputeLimitsOutputReference" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer"></a>

```typescript
import { emrManagedScalingPolicy } from '@cdktf/provider-aws'

new emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumCoreCapacityUnits">resetMaximumCoreCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumOndemandCapacityUnits">resetMaximumOndemandCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumCoreCapacityUnits` <a name="resetMaximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumCoreCapacityUnits"></a>

```typescript
public resetMaximumCoreCapacityUnits(): void
```

##### `resetMaximumOndemandCapacityUnits` <a name="resetMaximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.resetMaximumOndemandCapacityUnits"></a>

```typescript
public resetMaximumOndemandCapacityUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnitsInput">maximumCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnitsInput">maximumCoreCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnitsInput">maximumOndemandCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnitsInput">minimumCapacityUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitTypeInput">unitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnits">maximumCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnits">maximumCoreCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnits">maximumOndemandCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnits">minimumCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitType">unitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumCapacityUnitsInput`<sup>Optional</sup> <a name="maximumCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnitsInput"></a>

```typescript
public readonly maximumCapacityUnitsInput: number;
```

- *Type:* number

---

##### `maximumCoreCapacityUnitsInput`<sup>Optional</sup> <a name="maximumCoreCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnitsInput"></a>

```typescript
public readonly maximumCoreCapacityUnitsInput: number;
```

- *Type:* number

---

##### `maximumOndemandCapacityUnitsInput`<sup>Optional</sup> <a name="maximumOndemandCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnitsInput"></a>

```typescript
public readonly maximumOndemandCapacityUnitsInput: number;
```

- *Type:* number

---

##### `minimumCapacityUnitsInput`<sup>Optional</sup> <a name="minimumCapacityUnitsInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnitsInput"></a>

```typescript
public readonly minimumCapacityUnitsInput: number;
```

- *Type:* number

---

##### `unitTypeInput`<sup>Optional</sup> <a name="unitTypeInput" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitTypeInput"></a>

```typescript
public readonly unitTypeInput: string;
```

- *Type:* string

---

##### `maximumCapacityUnits`<sup>Required</sup> <a name="maximumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCapacityUnits"></a>

```typescript
public readonly maximumCapacityUnits: number;
```

- *Type:* number

---

##### `maximumCoreCapacityUnits`<sup>Required</sup> <a name="maximumCoreCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumCoreCapacityUnits"></a>

```typescript
public readonly maximumCoreCapacityUnits: number;
```

- *Type:* number

---

##### `maximumOndemandCapacityUnits`<sup>Required</sup> <a name="maximumOndemandCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.maximumOndemandCapacityUnits"></a>

```typescript
public readonly maximumOndemandCapacityUnits: number;
```

- *Type:* number

---

##### `minimumCapacityUnits`<sup>Required</sup> <a name="minimumCapacityUnits" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.minimumCapacityUnits"></a>

```typescript
public readonly minimumCapacityUnits: number;
```

- *Type:* number

---

##### `unitType`<sup>Required</sup> <a name="unitType" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.unitType"></a>

```typescript
public readonly unitType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EmrManagedScalingPolicyComputeLimits | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.emrManagedScalingPolicy.EmrManagedScalingPolicyComputeLimits">EmrManagedScalingPolicyComputeLimits</a> | cdktf.IResolvable

---



