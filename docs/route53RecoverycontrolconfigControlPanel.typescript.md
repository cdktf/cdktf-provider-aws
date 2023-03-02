# `route53RecoverycontrolconfigControlPanel` Submodule <a name="`route53RecoverycontrolconfigControlPanel` Submodule" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigControlPanel <a name="Route53RecoverycontrolconfigControlPanel" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel aws_route53recoverycontrolconfig_control_panel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigControlPanel } from '@cdktf/provider-aws'

new route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel(scope: Construct, id: string, config: Route53RecoverycontrolconfigControlPanelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig">Route53RecoverycontrolconfigControlPanelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig">Route53RecoverycontrolconfigControlPanelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct"></a>

```typescript
import { route53RecoverycontrolconfigControlPanel } from '@cdktf/provider-aws'

route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement"></a>

```typescript
import { route53RecoverycontrolconfigControlPanel } from '@cdktf/provider-aws'

route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource"></a>

```typescript
import { route53RecoverycontrolconfigControlPanel } from '@cdktf/provider-aws'

route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.defaultControlPanel">defaultControlPanel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.routingControlCount">routingControlCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultControlPanel`<sup>Required</sup> <a name="defaultControlPanel" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.defaultControlPanel"></a>

```typescript
public readonly defaultControlPanel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `routingControlCount`<sup>Required</sup> <a name="routingControlCount" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.routingControlCount"></a>

```typescript
public readonly routingControlCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigControlPanelConfig <a name="Route53RecoverycontrolconfigControlPanelConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigControlPanel } from '@cdktf/provider-aws'

const route53RecoverycontrolconfigControlPanelConfig: route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#name Route53RecoverycontrolconfigControlPanel#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#id Route53RecoverycontrolconfigControlPanel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#name Route53RecoverycontrolconfigControlPanel#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigControlPanel.Route53RecoverycontrolconfigControlPanelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel#id Route53RecoverycontrolconfigControlPanel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



