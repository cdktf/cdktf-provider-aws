# `aws_autoscaling_traffic_source_attachment`

Refer to the Terraform Registory for docs: [`aws_autoscaling_traffic_source_attachment`](https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment).

# `autoscalingTrafficSourceAttachment` Submodule <a name="`autoscalingTrafficSourceAttachment` Submodule" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingTrafficSourceAttachment <a name="AutoscalingTrafficSourceAttachment" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment aws_autoscaling_traffic_source_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

new autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment(scope: Construct, id: string, config: AutoscalingTrafficSourceAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig">AutoscalingTrafficSourceAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig">AutoscalingTrafficSourceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource">putTrafficSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource">resetTrafficSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: AutoscalingTrafficSourceAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

---

##### `putTrafficSource` <a name="putTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource"></a>

```typescript
public putTrafficSource(value: AutoscalingTrafficSourceAttachmentTrafficSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.putTrafficSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficSource` <a name="resetTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.resetTrafficSource"></a>

```typescript
public resetTrafficSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource">trafficSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput">trafficSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: AutoscalingTrafficSourceAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference">AutoscalingTrafficSourceAttachmentTimeoutsOutputReference</a>

---

##### `trafficSource`<sup>Required</sup> <a name="trafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSource"></a>

```typescript
public readonly trafficSource: AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference">AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference</a>

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupNameInput"></a>

```typescript
public readonly autoscalingGroupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutoscalingTrafficSourceAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

---

##### `trafficSourceInput`<sup>Optional</sup> <a name="trafficSourceInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.trafficSourceInput"></a>

```typescript
public readonly trafficSourceInput: AutoscalingTrafficSourceAttachmentTrafficSource;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingTrafficSourceAttachmentConfig <a name="AutoscalingTrafficSourceAttachmentConfig" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.Initializer"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

const autoscalingTrafficSourceAttachmentConfig: autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource">trafficSource</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | traffic_source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#autoscaling_group_name AutoscalingTrafficSourceAttachment#autoscaling_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#id AutoscalingTrafficSourceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutoscalingTrafficSourceAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#timeouts AutoscalingTrafficSourceAttachment#timeouts}

---

##### `trafficSource`<sup>Optional</sup> <a name="trafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentConfig.property.trafficSource"></a>

```typescript
public readonly trafficSource: AutoscalingTrafficSourceAttachmentTrafficSource;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

traffic_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#traffic_source AutoscalingTrafficSourceAttachment#traffic_source}

---

### AutoscalingTrafficSourceAttachmentTimeouts <a name="AutoscalingTrafficSourceAttachmentTimeouts" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.Initializer"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

const autoscalingTrafficSourceAttachmentTimeouts: autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#create AutoscalingTrafficSourceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#delete AutoscalingTrafficSourceAttachment#delete}.

---

### AutoscalingTrafficSourceAttachmentTrafficSource <a name="AutoscalingTrafficSourceAttachmentTrafficSource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.Initializer"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

const autoscalingTrafficSourceAttachmentTrafficSource: autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#identifier AutoscalingTrafficSourceAttachment#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/autoscaling_traffic_source_attachment#type AutoscalingTrafficSourceAttachment#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingTrafficSourceAttachmentTimeoutsOutputReference <a name="AutoscalingTrafficSourceAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

new autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingTrafficSourceAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTimeouts">AutoscalingTrafficSourceAttachmentTimeouts</a>

---


### AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference <a name="AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer"></a>

```typescript
import { autoscalingTrafficSourceAttachment } from '@cdktf/provider-aws'

new autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingTrafficSourceAttachmentTrafficSource;
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingTrafficSourceAttachment.AutoscalingTrafficSourceAttachmentTrafficSource">AutoscalingTrafficSourceAttachmentTrafficSource</a>

---



