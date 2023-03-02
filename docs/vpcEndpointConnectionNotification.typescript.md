# `vpcEndpointConnectionNotification` Submodule <a name="`vpcEndpointConnectionNotification` Submodule" id="@cdktf/provider-aws.vpcEndpointConnectionNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointConnectionNotification <a name="VpcEndpointConnectionNotification" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification aws_vpc_endpoint_connection_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer"></a>

```typescript
import { vpcEndpointConnectionNotification } from '@cdktf/provider-aws'

new vpcEndpointConnectionNotification.VpcEndpointConnectionNotification(scope: Construct, id: string, config: VpcEndpointConnectionNotificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig">VpcEndpointConnectionNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig">VpcEndpointConnectionNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointServiceId">resetVpcEndpointServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

##### `resetVpcEndpointServiceId` <a name="resetVpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointServiceId"></a>

```typescript
public resetVpcEndpointServiceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct"></a>

```typescript
import { vpcEndpointConnectionNotification } from '@cdktf/provider-aws'

vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement"></a>

```typescript
import { vpcEndpointConnectionNotification } from '@cdktf/provider-aws'

vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource"></a>

```typescript
import { vpcEndpointConnectionNotification } from '@cdktf/provider-aws'

vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEventsInput">connectionEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArnInput">connectionNotificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceIdInput">vpcEndpointServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEvents">connectionEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArn">connectionNotificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceId">vpcEndpointServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `connectionEventsInput`<sup>Optional</sup> <a name="connectionEventsInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEventsInput"></a>

```typescript
public readonly connectionEventsInput: string[];
```

- *Type:* string[]

---

##### `connectionNotificationArnInput`<sup>Optional</sup> <a name="connectionNotificationArnInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArnInput"></a>

```typescript
public readonly connectionNotificationArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointServiceIdInput`<sup>Optional</sup> <a name="vpcEndpointServiceIdInput" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceIdInput"></a>

```typescript
public readonly vpcEndpointServiceIdInput: string;
```

- *Type:* string

---

##### `connectionEvents`<sup>Required</sup> <a name="connectionEvents" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEvents"></a>

```typescript
public readonly connectionEvents: string[];
```

- *Type:* string[]

---

##### `connectionNotificationArn`<sup>Required</sup> <a name="connectionNotificationArn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArn"></a>

```typescript
public readonly connectionNotificationArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcEndpointServiceId`<sup>Required</sup> <a name="vpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceId"></a>

```typescript
public readonly vpcEndpointServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointConnectionNotificationConfig <a name="VpcEndpointConnectionNotificationConfig" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.Initializer"></a>

```typescript
import { vpcEndpointConnectionNotification } from '@cdktf/provider-aws'

const vpcEndpointConnectionNotificationConfig: vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionEvents">connectionEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_events VpcEndpointConnectionNotification#connection_events}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn">connectionNotificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#id VpcEndpointConnectionNotification#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointServiceId">vpcEndpointServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionEvents`<sup>Required</sup> <a name="connectionEvents" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionEvents"></a>

```typescript
public readonly connectionEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_events VpcEndpointConnectionNotification#connection_events}.

---

##### `connectionNotificationArn`<sup>Required</sup> <a name="connectionNotificationArn" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn"></a>

```typescript
public readonly connectionNotificationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#id VpcEndpointConnectionNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}.

---

##### `vpcEndpointServiceId`<sup>Optional</sup> <a name="vpcEndpointServiceId" id="@cdktf/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointServiceId"></a>

```typescript
public readonly vpcEndpointServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}.

---



