# `iotTopicRuleDestination` Submodule <a name="`iotTopicRuleDestination` Submodule" id="@cdktf/provider-aws.iotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTopicRuleDestination <a name="IotTopicRuleDestination" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination aws_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

new iotTopicRuleDestination.IotTopicRuleDestination(scope: Construct, id: string, config: IotTopicRuleDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig">IotTopicRuleDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig">IotTopicRuleDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts"></a>

```typescript
public putTimeouts(value: IotTopicRuleDestinationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: IotTopicRuleDestinationVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

iotTopicRuleDestination.IotTopicRuleDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference">IotTopicRuleDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference">IotTopicRuleDestinationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeouts"></a>

```typescript
public readonly timeouts: IotTopicRuleDestinationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference">IotTopicRuleDestinationTimeoutsOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: IotTopicRuleDestinationVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference">IotTopicRuleDestinationVpcConfigurationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IotTopicRuleDestinationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a> | cdktf.IResolvable

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: IotTopicRuleDestinationVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTopicRuleDestinationConfig <a name="IotTopicRuleDestinationConfig" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

const iotTopicRuleDestinationConfig: iotTopicRuleDestination.IotTopicRuleDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#enabled IotTopicRuleDestination#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#id IotTopicRuleDestination#id}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: IotTopicRuleDestinationVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_configuration IotTopicRuleDestination#vpc_configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#enabled IotTopicRuleDestination#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#id IotTopicRuleDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IotTopicRuleDestinationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#timeouts IotTopicRuleDestination#timeouts}

---

### IotTopicRuleDestinationTimeouts <a name="IotTopicRuleDestinationTimeouts" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

const iotTopicRuleDestinationTimeouts: iotTopicRuleDestination.IotTopicRuleDestinationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#create IotTopicRuleDestination#create}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#delete IotTopicRuleDestination#delete}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#update IotTopicRuleDestination#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#create IotTopicRuleDestination#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#delete IotTopicRuleDestination#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#update IotTopicRuleDestination#update}.

---

### IotTopicRuleDestinationVpcConfiguration <a name="IotTopicRuleDestinationVpcConfiguration" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

const iotTopicRuleDestinationVpcConfiguration: iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTopicRuleDestinationTimeoutsOutputReference <a name="IotTopicRuleDestinationTimeoutsOutputReference" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

new iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleDestinationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationTimeouts">IotTopicRuleDestinationTimeouts</a> | cdktf.IResolvable

---


### IotTopicRuleDestinationVpcConfigurationOutputReference <a name="IotTopicRuleDestinationVpcConfigurationOutputReference" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { iotTopicRuleDestination } from '@cdktf/provider-aws'

new iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleDestinationVpcConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.iotTopicRuleDestination.IotTopicRuleDestinationVpcConfiguration">IotTopicRuleDestinationVpcConfiguration</a>

---



