# `autoscalingAttachment` Submodule <a name="`autoscalingAttachment` Submodule" id="@cdktf/provider-aws.autoscalingAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingAttachment <a name="AutoscalingAttachment" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment aws_autoscaling_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer"></a>

```typescript
import { autoscalingAttachment } from '@cdktf/provider-aws'

new autoscalingAttachment.AutoscalingAttachment(scope: Construct, id: string, config: AutoscalingAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig">AutoscalingAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig">AutoscalingAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetAlbTargetGroupArn">resetAlbTargetGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetElb">resetElb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetLbTargetGroupArn">resetLbTargetGroupArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAlbTargetGroupArn` <a name="resetAlbTargetGroupArn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetAlbTargetGroupArn"></a>

```typescript
public resetAlbTargetGroupArn(): void
```

##### `resetElb` <a name="resetElb" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetElb"></a>

```typescript
public resetElb(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLbTargetGroupArn` <a name="resetLbTargetGroupArn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetLbTargetGroupArn"></a>

```typescript
public resetLbTargetGroupArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isConstruct"></a>

```typescript
import { autoscalingAttachment } from '@cdktf/provider-aws'

autoscalingAttachment.AutoscalingAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformElement"></a>

```typescript
import { autoscalingAttachment } from '@cdktf/provider-aws'

autoscalingAttachment.AutoscalingAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformResource"></a>

```typescript
import { autoscalingAttachment } from '@cdktf/provider-aws'

autoscalingAttachment.AutoscalingAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArnInput">albTargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elbInput">elbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArnInput">lbTargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArn">albTargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elb">elb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArn">lbTargetGroupArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `albTargetGroupArnInput`<sup>Optional</sup> <a name="albTargetGroupArnInput" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArnInput"></a>

```typescript
public readonly albTargetGroupArnInput: string;
```

- *Type:* string

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupNameInput"></a>

```typescript
public readonly autoscalingGroupNameInput: string;
```

- *Type:* string

---

##### `elbInput`<sup>Optional</sup> <a name="elbInput" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elbInput"></a>

```typescript
public readonly elbInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lbTargetGroupArnInput`<sup>Optional</sup> <a name="lbTargetGroupArnInput" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArnInput"></a>

```typescript
public readonly lbTargetGroupArnInput: string;
```

- *Type:* string

---

##### `albTargetGroupArn`<sup>Required</sup> <a name="albTargetGroupArn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArn"></a>

```typescript
public readonly albTargetGroupArn: string;
```

- *Type:* string

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

---

##### `elb`<sup>Required</sup> <a name="elb" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elb"></a>

```typescript
public readonly elb: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lbTargetGroupArn`<sup>Required</sup> <a name="lbTargetGroupArn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArn"></a>

```typescript
public readonly lbTargetGroupArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingAttachmentConfig <a name="AutoscalingAttachmentConfig" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.Initializer"></a>

```typescript
import { autoscalingAttachment } from '@cdktf/provider-aws'

const autoscalingAttachmentConfig: autoscalingAttachment.AutoscalingAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.albTargetGroupArn">albTargetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.elb">elb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#elb AutoscalingAttachment#elb}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#id AutoscalingAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lbTargetGroupArn">lbTargetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#lb_target_group_arn AutoscalingAttachment#lb_target_group_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}.

---

##### `albTargetGroupArn`<sup>Optional</sup> <a name="albTargetGroupArn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.albTargetGroupArn"></a>

```typescript
public readonly albTargetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}.

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.elb"></a>

```typescript
public readonly elb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#elb AutoscalingAttachment#elb}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#id AutoscalingAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lbTargetGroupArn`<sup>Optional</sup> <a name="lbTargetGroupArn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lbTargetGroupArn"></a>

```typescript
public readonly lbTargetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#lb_target_group_arn AutoscalingAttachment#lb_target_group_arn}.

---



