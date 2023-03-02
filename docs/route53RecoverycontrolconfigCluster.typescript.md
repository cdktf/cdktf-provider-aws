# `route53RecoverycontrolconfigCluster` Submodule <a name="`route53RecoverycontrolconfigCluster` Submodule" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigCluster <a name="Route53RecoverycontrolconfigCluster" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster aws_route53recoverycontrolconfig_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

new route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster(scope: Construct, id: string, config: Route53RecoverycontrolconfigClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig">Route53RecoverycontrolconfigClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig">Route53RecoverycontrolconfigClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isConstruct"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformElement"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformResource"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.clusterEndpoints">clusterEndpoints</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList">Route53RecoverycontrolconfigClusterClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterEndpoints`<sup>Required</sup> <a name="clusterEndpoints" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.clusterEndpoints"></a>

```typescript
public readonly clusterEndpoints: Route53RecoverycontrolconfigClusterClusterEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList">Route53RecoverycontrolconfigClusterClusterEndpointsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigClusterClusterEndpoints <a name="Route53RecoverycontrolconfigClusterClusterEndpoints" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

const route53RecoverycontrolconfigClusterClusterEndpoints: route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints = { ... }
```


### Route53RecoverycontrolconfigClusterConfig <a name="Route53RecoverycontrolconfigClusterConfig" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

const route53RecoverycontrolconfigClusterConfig: route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#name Route53RecoverycontrolconfigCluster#name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#id Route53RecoverycontrolconfigCluster#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#name Route53RecoverycontrolconfigCluster#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster#id Route53RecoverycontrolconfigCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolconfigClusterClusterEndpointsList <a name="Route53RecoverycontrolconfigClusterClusterEndpointsList" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

new route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.get"></a>

```typescript
public get(index: number): Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference <a name="Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer"></a>

```typescript
import { route53RecoverycontrolconfigCluster } from '@cdktf/provider-aws'

new route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints">Route53RecoverycontrolconfigClusterClusterEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Route53RecoverycontrolconfigClusterClusterEndpoints;
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoverycontrolconfigCluster.Route53RecoverycontrolconfigClusterClusterEndpoints">Route53RecoverycontrolconfigClusterClusterEndpoints</a>

---



