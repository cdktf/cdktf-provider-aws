# `vpcDhcpOptions` Submodule <a name="`vpcDhcpOptions` Submodule" id="@cdktf/provider-aws.vpcDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcDhcpOptions <a name="VpcDhcpOptions" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options aws_vpc_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer"></a>

```typescript
import { vpcDhcpOptions } from '@cdktf/provider-aws'

new vpcDhcpOptions.VpcDhcpOptions(scope: Construct, id: string, config?: VpcDhcpOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig">VpcDhcpOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig">VpcDhcpOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainNameServers">resetDomainNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNameServers">resetNetbiosNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNodeType">resetNetbiosNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNtpServers">resetNtpServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetDomainNameServers` <a name="resetDomainNameServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainNameServers"></a>

```typescript
public resetDomainNameServers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetbiosNameServers` <a name="resetNetbiosNameServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNameServers"></a>

```typescript
public resetNetbiosNameServers(): void
```

##### `resetNetbiosNodeType` <a name="resetNetbiosNodeType" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNodeType"></a>

```typescript
public resetNetbiosNodeType(): void
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNtpServers"></a>

```typescript
public resetNtpServers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isConstruct"></a>

```typescript
import { vpcDhcpOptions } from '@cdktf/provider-aws'

vpcDhcpOptions.VpcDhcpOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformElement"></a>

```typescript
import { vpcDhcpOptions } from '@cdktf/provider-aws'

vpcDhcpOptions.VpcDhcpOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformResource"></a>

```typescript
import { vpcDhcpOptions } from '@cdktf/provider-aws'

vpcDhcpOptions.VpcDhcpOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServersInput">domainNameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServersInput">netbiosNameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeTypeInput">netbiosNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServersInput">ntpServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServers">domainNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServers">netbiosNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeType">netbiosNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainNameServersInput`<sup>Optional</sup> <a name="domainNameServersInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServersInput"></a>

```typescript
public readonly domainNameServersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `netbiosNameServersInput`<sup>Optional</sup> <a name="netbiosNameServersInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServersInput"></a>

```typescript
public readonly netbiosNameServersInput: string[];
```

- *Type:* string[]

---

##### `netbiosNodeTypeInput`<sup>Optional</sup> <a name="netbiosNodeTypeInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeTypeInput"></a>

```typescript
public readonly netbiosNodeTypeInput: string;
```

- *Type:* string

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServersInput"></a>

```typescript
public readonly ntpServersInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainNameServers`<sup>Required</sup> <a name="domainNameServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServers"></a>

```typescript
public readonly domainNameServers: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `netbiosNameServers`<sup>Required</sup> <a name="netbiosNameServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServers"></a>

```typescript
public readonly netbiosNameServers: string[];
```

- *Type:* string[]

---

##### `netbiosNodeType`<sup>Required</sup> <a name="netbiosNodeType" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeType"></a>

```typescript
public readonly netbiosNodeType: string;
```

- *Type:* string

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcDhcpOptionsConfig <a name="VpcDhcpOptionsConfig" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.Initializer"></a>

```typescript
import { vpcDhcpOptions } from '@cdktf/provider-aws'

const vpcDhcpOptionsConfig: vpcDhcpOptions.VpcDhcpOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainNameServers">domainNameServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#id VpcDhcpOptions#id}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNameServers">netbiosNameServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNodeType">netbiosNodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags VpcDhcpOptions#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}.

---

##### `domainNameServers`<sup>Optional</sup> <a name="domainNameServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainNameServers"></a>

```typescript
public readonly domainNameServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#id VpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netbiosNameServers`<sup>Optional</sup> <a name="netbiosNameServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNameServers"></a>

```typescript
public readonly netbiosNameServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}.

---

##### `netbiosNodeType`<sup>Optional</sup> <a name="netbiosNodeType" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNodeType"></a>

```typescript
public readonly netbiosNodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}.

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags VpcDhcpOptions#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}.

---



