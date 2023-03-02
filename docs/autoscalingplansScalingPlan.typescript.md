# `autoscalingplansScalingPlan` Submodule <a name="`autoscalingplansScalingPlan` Submodule" id="@cdktf/provider-aws.autoscalingplansScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingplansScalingPlan <a name="AutoscalingplansScalingPlan" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan aws_autoscalingplans_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlan(scope: Construct, id: string, config: AutoscalingplansScalingPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig">AutoscalingplansScalingPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig">AutoscalingplansScalingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource">putApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstruction">putScalingInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApplicationSource` <a name="putApplicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource"></a>

```typescript
public putApplicationSource(value: AutoscalingplansScalingPlanApplicationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putApplicationSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `putScalingInstruction` <a name="putScalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstruction"></a>

```typescript
public putScalingInstruction(value: IResolvable | AutoscalingplansScalingPlanScalingInstruction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.putScalingInstruction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstruction">scalingInstruction</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList">AutoscalingplansScalingPlanScalingInstructionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion">scalingPlanVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput">applicationSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionInput">scalingInstructionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSource"></a>

```typescript
public readonly applicationSource: AutoscalingplansScalingPlanApplicationSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference">AutoscalingplansScalingPlanApplicationSourceOutputReference</a>

---

##### `scalingInstruction`<sup>Required</sup> <a name="scalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstruction"></a>

```typescript
public readonly scalingInstruction: AutoscalingplansScalingPlanScalingInstructionList;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList">AutoscalingplansScalingPlanScalingInstructionList</a>

---

##### `scalingPlanVersion`<sup>Required</sup> <a name="scalingPlanVersion" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingPlanVersion"></a>

```typescript
public readonly scalingPlanVersion: number;
```

- *Type:* number

---

##### `applicationSourceInput`<sup>Optional</sup> <a name="applicationSourceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.applicationSourceInput"></a>

```typescript
public readonly applicationSourceInput: AutoscalingplansScalingPlanApplicationSource;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scalingInstructionInput`<sup>Optional</sup> <a name="scalingInstructionInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.scalingInstructionInput"></a>

```typescript
public readonly scalingInstructionInput: IResolvable | AutoscalingplansScalingPlanScalingInstruction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingplansScalingPlanApplicationSource <a name="AutoscalingplansScalingPlanApplicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanApplicationSource: autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilter">tagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>[]</code> | tag_filter block. |

---

##### `cloudformationStackArn`<sup>Optional</sup> <a name="cloudformationStackArn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.cloudformationStackArn"></a>

```typescript
public readonly cloudformationStackArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource.property.tagFilter"></a>

```typescript
public readonly tagFilter: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>[]

tag_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#tag_filter AutoscalingplansScalingPlan#tag_filter}

---

### AutoscalingplansScalingPlanApplicationSourceTagFilter <a name="AutoscalingplansScalingPlanApplicationSourceTagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanApplicationSourceTagFilter: autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#key AutoscalingplansScalingPlan#key}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#values AutoscalingplansScalingPlan#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#key AutoscalingplansScalingPlan#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#values AutoscalingplansScalingPlan#values}.

---

### AutoscalingplansScalingPlanConfig <a name="AutoscalingplansScalingPlanConfig" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanConfig: autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource">applicationSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | application_source block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstruction">scalingInstruction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>[]</code> | scaling_instruction block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#id AutoscalingplansScalingPlan#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationSource`<sup>Required</sup> <a name="applicationSource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.applicationSource"></a>

```typescript
public readonly applicationSource: AutoscalingplansScalingPlanApplicationSource;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

application_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#application_source AutoscalingplansScalingPlan#application_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#name AutoscalingplansScalingPlan#name}.

---

##### `scalingInstruction`<sup>Required</sup> <a name="scalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.scalingInstruction"></a>

```typescript
public readonly scalingInstruction: IResolvable | AutoscalingplansScalingPlanScalingInstruction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>[]

scaling_instruction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scaling_instruction AutoscalingplansScalingPlan#scaling_instruction}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#id AutoscalingplansScalingPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AutoscalingplansScalingPlanScalingInstruction <a name="AutoscalingplansScalingPlanScalingInstruction" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanScalingInstruction: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#max_capacity AutoscalingplansScalingPlan#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.minCapacity">minCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#min_capacity AutoscalingplansScalingPlan#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_id AutoscalingplansScalingPlan#resource_id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#service_namespace AutoscalingplansScalingPlan#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>[]</code> | target_tracking_configuration block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a></code> | customized_load_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a></code> | predefined_load_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}. |

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#max_capacity AutoscalingplansScalingPlan#max_capacity}.

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#min_capacity AutoscalingplansScalingPlan#min_capacity}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_id AutoscalingplansScalingPlan#resource_id}.

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}.

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#service_namespace AutoscalingplansScalingPlan#service_namespace}.

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.targetTrackingConfiguration"></a>

```typescript
public readonly targetTrackingConfiguration: IResolvable | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>[]

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#target_tracking_configuration AutoscalingplansScalingPlan#target_tracking_configuration}

---

##### `customizedLoadMetricSpecification`<sup>Optional</sup> <a name="customizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.customizedLoadMetricSpecification"></a>

```typescript
public readonly customizedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

customized_load_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#customized_load_metric_specification AutoscalingplansScalingPlan#customized_load_metric_specification}

---

##### `disableDynamicScaling`<sup>Optional</sup> <a name="disableDynamicScaling" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.disableDynamicScaling"></a>

```typescript
public readonly disableDynamicScaling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}.

---

##### `predefinedLoadMetricSpecification`<sup>Optional</sup> <a name="predefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predefinedLoadMetricSpecification"></a>

```typescript
public readonly predefinedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

predefined_load_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_load_metric_specification AutoscalingplansScalingPlan#predefined_load_metric_specification}

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBehavior"></a>

```typescript
public readonly predictiveScalingMaxCapacityBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}.

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMaxCapacityBuffer"></a>

```typescript
public readonly predictiveScalingMaxCapacityBuffer: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}.

---

##### `predictiveScalingMode`<sup>Optional</sup> <a name="predictiveScalingMode" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.predictiveScalingMode"></a>

```typescript
public readonly predictiveScalingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}.

---

##### `scalingPolicyUpdateBehavior`<sup>Optional</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scalingPolicyUpdateBehavior"></a>

```typescript
public readonly scalingPolicyUpdateBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}.

---

##### `scheduledActionBufferTime`<sup>Optional</sup> <a name="scheduledActionBufferTime" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction.property.scheduledActionBufferTime"></a>

```typescript
public readonly scheduledActionBufferTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}.

---

### AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}.

---

### AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}. |

---

##### `predefinedLoadMetricType`<sup>Required</sup> <a name="predefinedLoadMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.predefinedLoadMetricType"></a>

```typescript
public readonly predefinedLoadMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}.

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}.

---

### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#target_value AutoscalingplansScalingPlan#target_value}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a></code> | customized_scaling_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a></code> | predefined_scaling_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#target_value AutoscalingplansScalingPlan#target_value}.

---

##### `customizedScalingMetricSpecification`<sup>Optional</sup> <a name="customizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.customizedScalingMetricSpecification"></a>

```typescript
public readonly customizedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

customized_scaling_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#customized_scaling_metric_specification AutoscalingplansScalingPlan#customized_scaling_metric_specification}

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}.

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}.

---

##### `predefinedScalingMetricSpecification`<sup>Optional</sup> <a name="predefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.predefinedScalingMetricSpecification"></a>

```typescript
public readonly predefinedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

predefined_scaling_metric_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_scaling_metric_specification AutoscalingplansScalingPlan#predefined_scaling_metric_specification}

---

##### `scaleInCooldown`<sup>Optional</sup> <a name="scaleInCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}.

---

##### `scaleOutCooldown`<sup>Optional</sup> <a name="scaleOutCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}.

---

### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#metric_name AutoscalingplansScalingPlan#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#namespace AutoscalingplansScalingPlan#namespace}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#statistic AutoscalingplansScalingPlan#statistic}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#dimensions AutoscalingplansScalingPlan#dimensions}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#unit AutoscalingplansScalingPlan#unit}.

---

### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

const autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification: autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}. |

---

##### `predefinedScalingMetricType`<sup>Required</sup> <a name="predefinedScalingMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.predefinedScalingMetricType"></a>

```typescript
public readonly predefinedScalingMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}.

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan#resource_label AutoscalingplansScalingPlan#resource_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingplansScalingPlanApplicationSourceOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilter">putTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn">resetCloudformationStackArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilter">resetTagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilter` <a name="putTagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilter"></a>

```typescript
public putTagFilter(value: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.putTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>[]

---

##### `resetCloudformationStackArn` <a name="resetCloudformationStackArn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetCloudformationStackArn"></a>

```typescript
public resetCloudformationStackArn(): void
```

##### `resetTagFilter` <a name="resetTagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.resetTagFilter"></a>

```typescript
public resetTagFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList">AutoscalingplansScalingPlanApplicationSourceTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput">cloudformationStackArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilter"></a>

```typescript
public readonly tagFilter: AutoscalingplansScalingPlanApplicationSourceTagFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList">AutoscalingplansScalingPlanApplicationSourceTagFilterList</a>

---

##### `cloudformationStackArnInput`<sup>Optional</sup> <a name="cloudformationStackArnInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArnInput"></a>

```typescript
public readonly cloudformationStackArnInput: string;
```

- *Type:* string

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilterInput"></a>

```typescript
public readonly tagFilterInput: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>[]

---

##### `cloudformationStackArn`<sup>Required</sup> <a name="cloudformationStackArn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn"></a>

```typescript
public readonly cloudformationStackArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanApplicationSource;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSource">AutoscalingplansScalingPlanApplicationSource</a>

---


### AutoscalingplansScalingPlanApplicationSourceTagFilterList <a name="AutoscalingplansScalingPlanApplicationSourceTagFilterList" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a>[]

---


### AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference <a name="AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanApplicationSourceTagFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanApplicationSourceTagFilter">AutoscalingplansScalingPlanApplicationSourceTagFilter</a> | cdktf.IResolvable

---


### AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionList <a name="AutoscalingplansScalingPlanScalingInstructionList" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanScalingInstructionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstruction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a>[]

---


### AutoscalingplansScalingPlanScalingInstructionOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putCustomizedLoadMetricSpecification">putCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putPredefinedLoadMetricSpecification">putPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putTargetTrackingConfiguration">putTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetCustomizedLoadMetricSpecification">resetCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetDisableDynamicScaling">resetDisableDynamicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredefinedLoadMetricSpecification">resetPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBehavior">resetPredictiveScalingMaxCapacityBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBuffer">resetPredictiveScalingMaxCapacityBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMode">resetPredictiveScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScalingPolicyUpdateBehavior">resetScalingPolicyUpdateBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScheduledActionBufferTime">resetScheduledActionBufferTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedLoadMetricSpecification` <a name="putCustomizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putCustomizedLoadMetricSpecification"></a>

```typescript
public putCustomizedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putCustomizedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

---

##### `putPredefinedLoadMetricSpecification` <a name="putPredefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putPredefinedLoadMetricSpecification"></a>

```typescript
public putPredefinedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putPredefinedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

---

##### `putTargetTrackingConfiguration` <a name="putTargetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putTargetTrackingConfiguration"></a>

```typescript
public putTargetTrackingConfiguration(value: IResolvable | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.putTargetTrackingConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>[]

---

##### `resetCustomizedLoadMetricSpecification` <a name="resetCustomizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetCustomizedLoadMetricSpecification"></a>

```typescript
public resetCustomizedLoadMetricSpecification(): void
```

##### `resetDisableDynamicScaling` <a name="resetDisableDynamicScaling" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetDisableDynamicScaling"></a>

```typescript
public resetDisableDynamicScaling(): void
```

##### `resetPredefinedLoadMetricSpecification` <a name="resetPredefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredefinedLoadMetricSpecification"></a>

```typescript
public resetPredefinedLoadMetricSpecification(): void
```

##### `resetPredictiveScalingMaxCapacityBehavior` <a name="resetPredictiveScalingMaxCapacityBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBehavior"></a>

```typescript
public resetPredictiveScalingMaxCapacityBehavior(): void
```

##### `resetPredictiveScalingMaxCapacityBuffer` <a name="resetPredictiveScalingMaxCapacityBuffer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMaxCapacityBuffer"></a>

```typescript
public resetPredictiveScalingMaxCapacityBuffer(): void
```

##### `resetPredictiveScalingMode` <a name="resetPredictiveScalingMode" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetPredictiveScalingMode"></a>

```typescript
public resetPredictiveScalingMode(): void
```

##### `resetScalingPolicyUpdateBehavior` <a name="resetScalingPolicyUpdateBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScalingPolicyUpdateBehavior"></a>

```typescript
public resetScalingPolicyUpdateBehavior(): void
```

##### `resetScheduledActionBufferTime` <a name="resetScheduledActionBufferTime" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.resetScheduledActionBufferTime"></a>

```typescript
public resetScheduledActionBufferTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecification">customizedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecificationInput">customizedLoadMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScalingInput">disableDynamicScalingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecificationInput">predefinedLoadMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehaviorInput">predictiveScalingMaxCapacityBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBufferInput">predictiveScalingMaxCapacityBufferInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingModeInput">predictiveScalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehaviorInput">scalingPolicyUpdateBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTimeInput">scheduledActionBufferTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfigurationInput">targetTrackingConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScaling">disableDynamicScaling</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehavior">predictiveScalingMaxCapacityBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBuffer">predictiveScalingMaxCapacityBuffer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMode">predictiveScalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimension">scalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehavior">scalingPolicyUpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTime">scheduledActionBufferTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespace">serviceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizedLoadMetricSpecification`<sup>Required</sup> <a name="customizedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecification"></a>

```typescript
public readonly customizedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference</a>

---

##### `predefinedLoadMetricSpecification`<sup>Required</sup> <a name="predefinedLoadMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecification"></a>

```typescript
public readonly predefinedLoadMetricSpecification: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfiguration"></a>

```typescript
public readonly targetTrackingConfiguration: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList</a>

---

##### `customizedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="customizedLoadMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.customizedLoadMetricSpecificationInput"></a>

```typescript
public readonly customizedLoadMetricSpecificationInput: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification</a>

---

##### `disableDynamicScalingInput`<sup>Optional</sup> <a name="disableDynamicScalingInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScalingInput"></a>

```typescript
public readonly disableDynamicScalingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: number;
```

- *Type:* number

---

##### `predefinedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedLoadMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predefinedLoadMetricSpecificationInput"></a>

```typescript
public readonly predefinedLoadMetricSpecificationInput: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

---

##### `predictiveScalingMaxCapacityBehaviorInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBehaviorInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehaviorInput"></a>

```typescript
public readonly predictiveScalingMaxCapacityBehaviorInput: string;
```

- *Type:* string

---

##### `predictiveScalingMaxCapacityBufferInput`<sup>Optional</sup> <a name="predictiveScalingMaxCapacityBufferInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBufferInput"></a>

```typescript
public readonly predictiveScalingMaxCapacityBufferInput: number;
```

- *Type:* number

---

##### `predictiveScalingModeInput`<sup>Optional</sup> <a name="predictiveScalingModeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingModeInput"></a>

```typescript
public readonly predictiveScalingModeInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimensionInput"></a>

```typescript
public readonly scalableDimensionInput: string;
```

- *Type:* string

---

##### `scalingPolicyUpdateBehaviorInput`<sup>Optional</sup> <a name="scalingPolicyUpdateBehaviorInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehaviorInput"></a>

```typescript
public readonly scalingPolicyUpdateBehaviorInput: string;
```

- *Type:* string

---

##### `scheduledActionBufferTimeInput`<sup>Optional</sup> <a name="scheduledActionBufferTimeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTimeInput"></a>

```typescript
public readonly scheduledActionBufferTimeInput: number;
```

- *Type:* number

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespaceInput"></a>

```typescript
public readonly serviceNamespaceInput: string;
```

- *Type:* string

---

##### `targetTrackingConfigurationInput`<sup>Optional</sup> <a name="targetTrackingConfigurationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.targetTrackingConfigurationInput"></a>

```typescript
public readonly targetTrackingConfigurationInput: IResolvable | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>[]

---

##### `disableDynamicScaling`<sup>Required</sup> <a name="disableDynamicScaling" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.disableDynamicScaling"></a>

```typescript
public readonly disableDynamicScaling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `predictiveScalingMaxCapacityBehavior`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBehavior"></a>

```typescript
public readonly predictiveScalingMaxCapacityBehavior: string;
```

- *Type:* string

---

##### `predictiveScalingMaxCapacityBuffer`<sup>Required</sup> <a name="predictiveScalingMaxCapacityBuffer" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMaxCapacityBuffer"></a>

```typescript
public readonly predictiveScalingMaxCapacityBuffer: number;
```

- *Type:* number

---

##### `predictiveScalingMode`<sup>Required</sup> <a name="predictiveScalingMode" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.predictiveScalingMode"></a>

```typescript
public readonly predictiveScalingMode: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalableDimension"></a>

```typescript
public readonly scalableDimension: string;
```

- *Type:* string

---

##### `scalingPolicyUpdateBehavior`<sup>Required</sup> <a name="scalingPolicyUpdateBehavior" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scalingPolicyUpdateBehavior"></a>

```typescript
public readonly scalingPolicyUpdateBehavior: string;
```

- *Type:* string

---

##### `scheduledActionBufferTime`<sup>Required</sup> <a name="scheduledActionBufferTime" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.scheduledActionBufferTime"></a>

```typescript
public readonly scheduledActionBufferTime: number;
```

- *Type:* number

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.serviceNamespace"></a>

```typescript
public readonly serviceNamespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanScalingInstruction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstruction">AutoscalingplansScalingPlanScalingInstruction</a> | cdktf.IResolvable

---


### AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.resetResourceLabel"></a>

```typescript
public resetResourceLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput">predefinedLoadMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType">predefinedLoadMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedLoadMetricTypeInput`<sup>Optional</sup> <a name="predefinedLoadMetricTypeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricTypeInput"></a>

```typescript
public readonly predefinedLoadMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedLoadMetricType`<sup>Required</sup> <a name="predefinedLoadMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType"></a>

```typescript
public readonly predefinedLoadMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification">AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.get"></a>

```typescript
public get(index: number): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a>[]

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putCustomizedScalingMetricSpecification">putCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putPredefinedScalingMetricSpecification">putPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetCustomizedScalingMetricSpecification">resetCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetEstimatedInstanceWarmup">resetEstimatedInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetPredefinedScalingMetricSpecification">resetPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleInCooldown">resetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleOutCooldown">resetScaleOutCooldown</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedScalingMetricSpecification` <a name="putCustomizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putCustomizedScalingMetricSpecification"></a>

```typescript
public putCustomizedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putCustomizedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

---

##### `putPredefinedScalingMetricSpecification` <a name="putPredefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putPredefinedScalingMetricSpecification"></a>

```typescript
public putPredefinedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.putPredefinedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

---

##### `resetCustomizedScalingMetricSpecification` <a name="resetCustomizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetCustomizedScalingMetricSpecification"></a>

```typescript
public resetCustomizedScalingMetricSpecification(): void
```

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetDisableScaleIn"></a>

```typescript
public resetDisableScaleIn(): void
```

##### `resetEstimatedInstanceWarmup` <a name="resetEstimatedInstanceWarmup" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetEstimatedInstanceWarmup"></a>

```typescript
public resetEstimatedInstanceWarmup(): void
```

##### `resetPredefinedScalingMetricSpecification` <a name="resetPredefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetPredefinedScalingMetricSpecification"></a>

```typescript
public resetPredefinedScalingMetricSpecification(): void
```

##### `resetScaleInCooldown` <a name="resetScaleInCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleInCooldown"></a>

```typescript
public resetScaleInCooldown(): void
```

##### `resetScaleOutCooldown` <a name="resetScaleOutCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.resetScaleOutCooldown"></a>

```typescript
public resetScaleOutCooldown(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecification">customizedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecificationInput">customizedScalingMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmupInput">estimatedInstanceWarmupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecificationInput">predefinedScalingMetricSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldownInput">scaleInCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldownInput">scaleOutCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldown">scaleInCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldown">scaleOutCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizedScalingMetricSpecification`<sup>Required</sup> <a name="customizedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecification"></a>

```typescript
public readonly customizedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference</a>

---

##### `predefinedScalingMetricSpecification`<sup>Required</sup> <a name="predefinedScalingMetricSpecification" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecification"></a>

```typescript
public readonly predefinedScalingMetricSpecification: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `customizedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="customizedScalingMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.customizedScalingMetricSpecificationInput"></a>

```typescript
public readonly customizedScalingMetricSpecificationInput: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification</a>

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleInInput"></a>

```typescript
public readonly disableScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `estimatedInstanceWarmupInput`<sup>Optional</sup> <a name="estimatedInstanceWarmupInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmupInput"></a>

```typescript
public readonly estimatedInstanceWarmupInput: number;
```

- *Type:* number

---

##### `predefinedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedScalingMetricSpecificationInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.predefinedScalingMetricSpecificationInput"></a>

```typescript
public readonly predefinedScalingMetricSpecificationInput: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

---

##### `scaleInCooldownInput`<sup>Optional</sup> <a name="scaleInCooldownInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldownInput"></a>

```typescript
public readonly scaleInCooldownInput: number;
```

- *Type:* number

---

##### `scaleOutCooldownInput`<sup>Optional</sup> <a name="scaleOutCooldownInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```typescript
public readonly scaleOutCooldownInput: number;
```

- *Type:* number

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `estimatedInstanceWarmup`<sup>Required</sup> <a name="estimatedInstanceWarmup" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

---

##### `scaleInCooldown`<sup>Required</sup> <a name="scaleInCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleInCooldown"></a>

```typescript
public readonly scaleInCooldown: number;
```

- *Type:* number

---

##### `scaleOutCooldown`<sup>Required</sup> <a name="scaleOutCooldown" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.scaleOutCooldown"></a>

```typescript
public readonly scaleOutCooldown: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration</a> | cdktf.IResolvable

---


### AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference <a name="AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingplansScalingPlan } from '@cdktf/provider-aws'

new autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.resetResourceLabel"></a>

```typescript
public resetResourceLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput">predefinedScalingMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType">predefinedScalingMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedScalingMetricTypeInput`<sup>Optional</sup> <a name="predefinedScalingMetricTypeInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricTypeInput"></a>

```typescript
public readonly predefinedScalingMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedScalingMetricType`<sup>Required</sup> <a name="predefinedScalingMetricType" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType"></a>

```typescript
public readonly predefinedScalingMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingplansScalingPlan.AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification">AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification</a>

---



