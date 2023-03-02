# `defaultNetworkAcl` Submodule <a name="`defaultNetworkAcl` Submodule" id="@cdktf/provider-aws.defaultNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNetworkAcl <a name="DefaultNetworkAcl" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl aws_default_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

new defaultNetworkAcl.DefaultNetworkAcl(scope: Construct, id: string, config: DefaultNetworkAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig">DefaultNetworkAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig">DefaultNetworkAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress"></a>

```typescript
public putEgress(value: IResolvable | DefaultNetworkAclEgress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress"></a>

```typescript
public putIngress(value: IResolvable | DefaultNetworkAclIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

defaultNetworkAcl.DefaultNetworkAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput">defaultNetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput">egressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput">ingressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress"></a>

```typescript
public readonly egress: DefaultNetworkAclEgressList;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress"></a>

```typescript
public readonly ingress: DefaultNetworkAclIngressList;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `defaultNetworkAclIdInput`<sup>Optional</sup> <a name="defaultNetworkAclIdInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput"></a>

```typescript
public readonly defaultNetworkAclIdInput: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput"></a>

```typescript
public readonly egressInput: IResolvable | DefaultNetworkAclEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput"></a>

```typescript
public readonly ingressInput: IResolvable | DefaultNetworkAclIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId"></a>

```typescript
public readonly defaultNetworkAclId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNetworkAclConfig <a name="DefaultNetworkAclConfig" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

const defaultNetworkAclConfig: defaultNetworkAcl.DefaultNetworkAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress">egress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]</code> | egress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]</code> | ingress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId"></a>

```typescript
public readonly defaultNetworkAclId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress"></a>

```typescript
public readonly egress: IResolvable | DefaultNetworkAclEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#egress DefaultNetworkAcl#egress}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | DefaultNetworkAclIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

ingress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ingress DefaultNetworkAcl#ingress}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}.

---

### DefaultNetworkAclEgress <a name="DefaultNetworkAclEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

const defaultNetworkAclEgress: defaultNetworkAcl.DefaultNetworkAclEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo">ruleNo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode">icmpCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType">icmpType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

### DefaultNetworkAclIngress <a name="DefaultNetworkAclIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

const defaultNetworkAclIngress: defaultNetworkAcl.DefaultNetworkAclIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo">ruleNo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode">icmpCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType">icmpType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNetworkAclEgressList <a name="DefaultNetworkAclEgressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

new defaultNetworkAcl.DefaultNetworkAclEgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get"></a>

```typescript
public get(index: number): DefaultNetworkAclEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultNetworkAclEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>[]

---


### DefaultNetworkAclEgressOutputReference <a name="DefaultNetworkAclEgressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

new defaultNetworkAcl.DefaultNetworkAclEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput">ruleNoInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType">icmpType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo">ruleNo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: number;
```

- *Type:* number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ruleNoInput`<sup>Optional</sup> <a name="ruleNoInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput"></a>

```typescript
public readonly ruleNoInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultNetworkAclEgress | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a> | cdktf.IResolvable

---


### DefaultNetworkAclIngressList <a name="DefaultNetworkAclIngressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

new defaultNetworkAcl.DefaultNetworkAclIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get"></a>

```typescript
public get(index: number): DefaultNetworkAclIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultNetworkAclIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>[]

---


### DefaultNetworkAclIngressOutputReference <a name="DefaultNetworkAclIngressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer"></a>

```typescript
import { defaultNetworkAcl } from '@cdktf/provider-aws'

new defaultNetworkAcl.DefaultNetworkAclIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput">ruleNoInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType">icmpType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo">ruleNo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: number;
```

- *Type:* number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ruleNoInput`<sup>Optional</sup> <a name="ruleNoInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput"></a>

```typescript
public readonly ruleNoInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultNetworkAclIngress | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a> | cdktf.IResolvable

---



